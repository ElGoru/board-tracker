import * as Linking from 'expo-linking';
import React from 'react';
import SvgQRCode from 'react-native-qrcode-svg';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Text } from 'react-native-paper';

import { Sticker } from '../types/graphql';

export const QRSticker = ({ sticker }: { sticker: Sticker }) => {
  const navigation = useNavigation();
  const url = Linking.makeUrl(`/registerboard/${sticker.id}`);
  return (
    <View style={styles.container}>
      <View style={styles.qr}>
        <SvgQRCode value={url} size={200} />
      </View>
      <Text style={styles.title}>
        Size: {sticker.size} Color: {sticker.color}
      </Text>
      <Button
        mode="contained"
        onPress={() =>
          navigation.navigate('PrivateNavigator', {
            screen: 'RegisterBoard',
            params: { stickerId: sticker.id },
          })
        }>
        Register Board
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    marginTop: 10,
  },
  qr: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});
