import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Sticker } from '../src/API';
import SvgQRCode from 'react-native-qrcode-svg';

export default function QRSticker(props: { sticker: Sticker }) {
    let url = `http://example.com?stickerId=${props.sticker.id}`;
    return (
        <View style={styles.container}>
            <Text>Id: {props.sticker.id}</Text>
            <SvgQRCode value={url} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 1000,
        padding: 300,
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
