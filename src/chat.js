import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Input, Layout, Text, Avatar } from '@ui-kitten/components';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { id: messages.length, text: newMessage, user: 'You' }]);
      setNewMessage('');
    }
  };

  const renderMessage = ({ item }) => (
    <View
      style={{
        flexDirection: item.user === 'You' ? 'row-reverse' : 'row',
        marginVertical: 4,
        alignItems: 'center',
      }}
    >
      <Avatar source={{ uri: 'https://placekitten.com/200/200' }} />
      <View
        style={{
          backgroundColor: item.user === 'You' ? '#2189DC' : '#E5E5E5',
          borderRadius: 8,
          paddingHorizontal: 12,
          paddingVertical: 8,
          marginHorizontal: 8,
        }}
      >
        <Text style={{ color: item.user === 'You' ? '#FFF' : '#000' }}>{item.text}</Text>
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
