import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

import { withAuthenticator } from 'aws-amplify-react-native';
import QRScanner from '../components/QRScanner';

export default function TabTwoScreen() {
    return (
        <View style={styles.container}>
            <QRScanner />
        </View>
    );
}
//export default withAuthenticator(TabTwoScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
