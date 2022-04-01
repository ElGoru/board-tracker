import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Sticker } from '../types/graphql';
import SvgQRCode from 'react-native-qrcode-svg';
import * as Linking from 'expo-linking';
import { Link } from '@react-navigation/native';

export default function QRSticker(props: { sticker: Sticker }) {
  let url = Linking.makeUrl(`/registerboard/${props.sticker.id}`);
  return (
    <View style={styles.container}>
      <View style={styles.qr}>
        <SvgQRCode value={url} size={200} />
      </View>
      <Text style={styles.title}>
        Size: {props.sticker.size} Color: {props.sticker.color}
      </Text>
      <Link to={url}>{url}</Link>
    </View>
  );
}
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
