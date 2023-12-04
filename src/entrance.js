import React from 'react';
import { View, TextInput } from 'react-native';
import {  Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';


export default Entrance = () => {
    return (
      <View style={{ flex: 1 }}> 
        {/* Input Area */}
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
          <TextInput
            placeholder="Type a message"
            style={{ flex: 1, marginRight: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 8 }}
          />
          <IconButton icon="send" onPress={() => console.log('Send')} />
        </View>
      </View>
    );
  };

