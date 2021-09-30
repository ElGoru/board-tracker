import React from 'react';
import { View, Text } from 'react-native';
import { Sticker } from '../src/API';
import SvgQRCode from 'react-native-qrcode-svg';

export default function QRSticker(props: { sticker: Sticker }) {
    let url = `http://example.com/${props.sticker.id}`;
    return (
        <View>
            <Text>Id: {props.sticker.id}</Text>
            <SvgQRCode value={url} />
        </View>
    );
}
