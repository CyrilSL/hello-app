// UserSelectionScreen.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

const UserSelectionScreen = () => {
  const navigation = useNavigation();

  const handleUserSelection = (sender,recipient) => {
    // Navigate to AnotherScreen and pass the selected user as a parameter
    navigation.navigate('ChatScreen', { senderUser: sender, recipientUser: recipient });
  };

  return (
    <Layout style={styles.container}>
      <Button
        style={styles.button}
        onPress={() => handleUserSelection('Cyril','Afbi')}
      >
        You are Cyril
      </Button>
      <Button
        style={styles.button}
        onPress={() => handleUserSelection('Afbi','Cyril')}
      >
        You are Afbi
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    marginVertical: 8,
  },
});

export default UserSelectionScreen;
