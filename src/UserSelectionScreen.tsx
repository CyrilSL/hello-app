import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground, Text } from 'react-native';
import { Button, Layout } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';

interface UserSelectionScreenProps {}

const UserSelectionScreen: React.FC<UserSelectionScreenProps> = () => {
  const navigation = useNavigation();
  const fontLoadedRef = useRef(false);

//Custom Font Addition
const BlueStyle = require('./Fonts/Pixer.ttf');

useEffect(() => {
  async function loadFonts() {
    await Font.loadAsync({
      'my-font': BlueStyle,
    });
    fontLoadedRef.current = true;
  }

  loadFonts();
}, []);

// Removing Header
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  
  const handleUserSelection = (sender: string, recipient: string) => {
    // Navigate to AnotherScreen and pass the selected user as a parameter
    navigation.navigate('ChatScreen', { senderUser: sender, recipientUser: recipient });

    
  };

  return (
    <Layout style={styles.container}>
    <Text style={styles.text1}> Who Are You???</Text>
      <TouchableOpacity style={styles.button1} onPress={() => handleUserSelection('Cyril', 'Afbi')}>
        <ImageBackground source={require('./Media/C.jpeg')} style={styles.image}>
          {/* Any additional content or text can be added here */}
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={() => handleUserSelection('Afbi', 'Cyril')}>
        <ImageBackground source={require('./Media/A.jpeg')} style={styles.image}>
          {/* Any additional content or text can be added here */}
        </ImageBackground>
      </TouchableOpacity>
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

  button1: {
    height:150,
    width:150,
   marginVertical: 30,
   overflow: 'hidden',
   borderRadius: 20,
   right:60
  },

  button2: {
    height:150,
    width:150,
   marginVertical: 30,
   overflow: 'hidden',
   borderRadius: 20,
   left:60
  },

  image: {
    width: '100%',
    height: '100%',
  },

  text1:{
    // fontFamily: 'my-font', 
    color: '#FFFFFF',
    fontSize:50,
    height:100
  }
});



export default UserSelectionScreen;

