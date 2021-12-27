import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { View } from '../components/Themed';
import { API } from 'aws-amplify';
import {
    CreateLocationInput,
    CreateLocationMutation,
    GetStickerQuery,
    Sticker,
} from '../src/API';
import { getSticker } from '../src/graphql/queries';
import { RootStackScreenProps } from '../types';
import { GraphQLResult } from '@aws-amplify/api';
import * as Location from 'expo-location';
import { createLocation } from '../src/graphql/mutations';
import { getLocation } from '../src/utils';

export default function IndexScreen({
    route,
    navigation,
}: RootStackScreenProps<'Index'>) {
    const [sticker, setSticker] = useState<Sticker>();

    useEffect(() => {
        const stickerId = route.params?.stickerId;
        if (!stickerId) return;
        fetchSticker(stickerId);
    }, []);

    useEffect(() => {
        setBoardLocation();
    }, [sticker]);

    const fetchSticker = async (stickerId: string) => {
        try {
            const response = await (API.graphql({
                query: getSticker,
                variables: { id: stickerId },
                authMode: 'API_KEY',
            }) as Promise<GraphQLResult<GetStickerQuery>>);
            setSticker((response.data?.getSticker as Sticker) ?? undefined);
        } catch (err) {
            console.log(`error: ${err}`);
        }
    };

    const setBoardLocation = async () => {
        try {
            const location = await getLocation();
            if (!location || !sticker?.board) return;

            const createLocationInput: CreateLocationInput = {
                Latitude: location?.coords.latitude,
                Longitude: location?.coords.longitude,
                locationBoardId: sticker?.board?.id,
            };
            await (API.graphql({
                query: createLocation,
                variables: { input: createLocationInput },
                authMode: 'API_KEY',
            }) as Promise<GraphQLResult<CreateLocationMutation>>);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <View style={styles.container}>
            <Text>{sticker?.board?.owner}</Text>
            <Text>{sticker?.board?.brand}</Text>
            <Text>{route.params?.stickerId}</Text>
            <Button onPress={() => navigation.navigate('Root')}>
                Go to home screen!
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
