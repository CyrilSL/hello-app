import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Input, Layout, Text, Avatar } from '@ui-kitten/components';
import { supabase } from '../utils/supabase';
import { useRoute } from '@react-navigation/native';


interface Message {
  id: number;
  message: string;
  sender: string;
  recipient: string;
  created_at: string; // Adjust the type based on your actual data type
}

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');


  const route = useRoute();
  const { senderUser } = route.params;
  const { recipientUser } = route.params;

  console.log('This sender is : ' + senderUser);
  console.log('Receiver is : ' + recipientUser);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase.from('messages').select('*').order('created_at', { ascending: true });
      if (error) {
        console.error('Error fetching messages:', error.message);
      } else {
        setMessages(data || []);
      }
    } catch (error) {
      console.error('Error fetching messages:', error.message);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleSend = async () => {
    if (newMessage.trim() !== '') {
      try {
        // Add the new message to Supabase
        await supabase.from('messages').upsert([
          { message: newMessage, sender: senderUser, recipient: recipientUser },
        ]);

        // Fetch the latest messages from Supabase after sending a message
        await fetchMessages();

        setNewMessage('');
      } catch (error) {
        console.error('Error sending or fetching messages:', error.message);
      }
    }
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View
      style={{
        flexDirection: item.sender === senderUser ? 'row-reverse' : 'row',
        marginVertical: 4,
        alignItems: 'center',
      }}
    >
      <Avatar source={{ uri: 'https://placekitten.com/200/200' }} />
      <View
        style={{
          backgroundColor: item.sender === senderUser ? '#2189DC' : '#E5E5E5',
          borderRadius: 8,
          paddingHorizontal: 12,
          paddingVertical: 8,
          marginHorizontal: 8,
        }}
      >
        <Text style={{ color: item.sender === senderUser ? '#FFF' : '#000' }}>{item.message}</Text>
      </View>
    </View>
  );

  return (
    <Layout style={{ flex: 1 }}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
      />
      <Layout style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }}>
        <Input
          style={{ flex: 1, marginRight: 8 }}
          placeholder="Type a message"
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
        />
        <Button onPress={handleSend}>Send</Button>
      </Layout>
    </Layout>
  );
};

export default ChatScreen;
