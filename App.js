import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "./App.css";
export default function App() {
  return (
    <View style={styles.container}>
      <Text class ="my-text" style={{color:'red', fontSize:'40px'}}>Welcome To My Apps</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
