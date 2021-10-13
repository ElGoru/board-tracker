import { API, graphqlOperation } from 'aws-amplify';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { GetStickerQuery, Sticker } from '../src/API';
import { getSticker } from '../src/graphql/queries';
import { RootStackScreenProps } from '../types';
import { GraphQLResult } from '@aws-amplify/api';

export default function IndexScreen({
    route,
    navigation,
}: RootStackScreenProps<'Index'>) {
    const [sticker, setSticker] = React.useState<Sticker>();
    React.useEffect(() => {
        fetchSticker();
    }, []);

    async function fetchSticker() {
        const stickerId = route.params?.stickerId;
        if (!stickerId) return;
        try {
            const response = await (API.graphql({
                query: getSticker,
                variables: { id: stickerId },
                authMode: 'API_KEY',
            }) as Promise<GraphQLResult<GetStickerQuery>>);
            setSticker(response.data?.getSticker || undefined);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <View style={styles.container}>
            <Text>{sticker?.board?.brand}</Text>
            <Text>{route.params?.stickerId}</Text>
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
