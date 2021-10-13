import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import StickerForm from '../components/StickerForm';
import { Text, View } from '../components/Themed';
import { withAuthenticator } from 'aws-amplify-react-native';
import Auth from '@aws-amplify/auth';

export default function ModalScreen() {
    const signOut = async () => {
        try {
            let response = await Auth.signOut({ global: true });
            console.log(response);
        } catch (error) {
            console.log('error signing out: ', error);
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Modal</Text>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <StickerForm />
            <Button onPress={signOut}>Log Out</Button>
            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'pink',
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
