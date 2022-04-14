import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

import StickerForm from '../components/StickerForm';
import { View } from '../components/Themed';

export const ModalScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} />
      <StickerForm />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
