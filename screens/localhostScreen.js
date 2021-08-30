import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  const baseUrl =
    Platform.OS === 'android'
      ? 'http://computer_ip_address:5566'
      : 'http://localhost:5566';
  //   in 5566 port .net is running with http
  const xyz = async () => {
    try {
      const response = await fetch(baseUrl + '/api/Authentication', {
        method: 'POST',
        // mode: 'no-cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Allow-Headers': '*',
        },
        body: JSON.stringify({
          Email: 'abc@gmail.com',
          Password: 'abc@132',
        }),
      });
      let json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>localhost call</Text>
      <Button title="call" onPress={xyz} />
    </View>
  );
}
