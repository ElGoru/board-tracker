import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet, TextInput } from 'react-native';
import StickerForm from '../components/StickerForm';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Modal</Text>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <StickerForm />
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
