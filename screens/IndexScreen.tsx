import { API, graphqlOperation } from 'aws-amplify';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import {
    CreateLocationInput,
    CreateLocationMutation,
    GetStickerQuery,
    Sticker,
} from '../src/API';
import { getSticker } from '../src/graphql/queries';
import { RootStackScreenProps } from '../types';
import { GraphQLResult } from '@aws-amplify/api';
import { Button } from 'react-native-paper';

import * as Location from 'expo-location';
import { createLocation } from '../src/graphql/mutations';

export default function IndexScreen({
    route,
    navigation,
}: RootStackScreenProps<'Index'>) {
    const [sticker, setSticker] = React.useState<Sticker>();
    const [errorMsg, setErrorMsg] = React.useState<string>();

    React.useEffect(() => {
        const stickerId = route.params?.stickerId;
        if (!stickerId) return;
        fetchSticker(stickerId);
    }, []);

    React.useEffect(() => {
        setBoardLocation();
    }, [sticker]);

    async function fetchSticker(stickerId: string) {
        try {
            const response = await (API.graphql({
                query: getSticker,
                variables: { id: stickerId },
                authMode: 'API_KEY',
            }) as Promise<GraphQLResult<GetStickerQuery>>);
            setSticker(response.data?.getSticker ?? undefined);
        } catch (err) {
            console.log(`error: ${err}`);
        }
    }

    async function setBoardLocation() {
        try {
            const location = await getLocation();
            if (!location || !sticker?.board) return;

            const createLocationInput: CreateLocationInput = {
                Latitude: location?.coords.latitude,
                Longitude: location?.coords.longitude,
                locationBoardId: sticker?.board?.id,
            };
            const response = await (API.graphql({
                query: createLocation,
                variables: { input: createLocationInput },
                authMode: 'API_KEY',
            }) as Promise<GraphQLResult<CreateLocationMutation>>);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    async function getLocation() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        return await Location.getCurrentPositionAsync({});
    }

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
