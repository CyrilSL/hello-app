import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Input, Layout, Text, Avatar } from '@ui-kitten/components';
import { supabase } from '../utils/supabase';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch all messages from Supabase
    const fetchMessages = async () => {
      const { data, error } = await supabase.from('messages').select('*').order('created_at', { ascending: true });
      if (error) {
        console.error('Error fetching messages:', error.message);
      } else {
        setMessages(data);
        console.log(data);
      }
    };

    fetchMessages();
  }, []); // Empty dependency array ensures the effect runs only once on mount


  const handleSend = async () => {
    if (newMessage.trim() !== '') {
      // Add the new message to Supabase
      const { data, error } = await supabase.from('messages').upsert([
        { message: newMessage, sender: 'Cyril', recipient:'Afbi' },
      ]);

      if (error) {
        console.error('Error sending message:', error.message);
      } else {
        // Update the local state with the new message
        setMessages([...messages, data[0]]);
        setNewMessage('');
      }
    }
  };

  const renderMessage = ({ item }) => (
    <View
      style={{
        flexDirection: item.sender === 'Cyril' ? 'row-reverse' : 'row',
        marginVertical: 4,
        alignItems: 'center',
      }}
    >
      <Avatar source={{ uri: 'https://placekitten.com/200/200' }} />
      <View
        style={{
          backgroundColor: item.sender === 'Cyril' ? '#2189DC' : '#E5E5E5',
          borderRadius: 8,
          paddingHorizontal: 12,
          paddingVertical: 8,
          marginHorizontal: 8,
        }}
      >
        <Text style={{ color: item.sender === 'Cyril' ? '#FFF' : '#000' }}>{item.message}</Text>
      </View>
    </View>
  );

  return (
    <Layout style={{ flex: 1 }}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
        inverted
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
