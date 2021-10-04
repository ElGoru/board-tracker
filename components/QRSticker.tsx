import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Sticker } from '../src/API';
import SvgQRCode from 'react-native-qrcode-svg';

export default function QRSticker(props: { sticker: Sticker }) {
    let url = `http://example.com?stickerId=${props.sticker.id}`;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Size: {props.sticker.size} Color: {props.sticker.color}
            </Text>
            <SvgQRCode value={url} size={200} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    title: {
        marginBottom: 10,
    },
});
