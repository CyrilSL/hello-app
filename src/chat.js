import React from 'react';
import { View, TextInput } from 'react-native';
import {  Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';


export default ChatScreen = () => {
    return (
      <View style={{ flex: 1 }}>
        {/* Header */}
        <Card.Title
          title="John Doe"
          subtitle="Active now"
        //   left={(props) => <Avatar.Image {...props} source={require('./path/to/avatar.png')} />}
          right={(props) => <IconButrton {...props} icon="phone" onPress={() => console.log('Call')} />}
        />
  
        {/* Chat Messages */}
        <Card>
          <Card.Content>
            <Paragraph>Hey, how are you?</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => console.log('Reply')}>Reply</Button>
          </Card.Actions>
        </Card>
  
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

