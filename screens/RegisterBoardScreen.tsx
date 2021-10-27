import * as React from 'react';
import { StyleSheet } from 'react-native';
import BoardForm from '../components/BoardForm';
import {
    Board,
    CreateBoardInput,
    CreateBoardMutation,
    GetStickerQuery,
    Sticker,
    UpdateStickerInput,
    UpdateStickerMutation,
} from '../src/API';
import QRScanner from '../components/QRScanner';
import { getSticker } from '../src/graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { createBoard, updateSticker } from '../src/graphql/mutations';
import { View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function RegisterBoardScreen({
    navigation,
}: RootStackScreenProps<'RegisterBoardScreen'>) {
    const [sticker, setSticker] = React.useState<Sticker>();

    //Refactor to useCallback
    const qrScannerCallback = async (data: string) => {
        const url = new URL(data);
        //Find a better way
        const stickerId = url.pathname.replace('/', '');
        if (!stickerId) return false;
        try {
            const response = await (API.graphql(
                graphqlOperation(getSticker, { id: stickerId }),
            ) as Promise<GraphQLResult<GetStickerQuery>>);
            if (response.data?.getSticker?.board) return false;
            setSticker(response.data?.getSticker || undefined);
            return true;
        } catch (err) {
            console.log(err);
            throw err;
        }
    };

    //Refactor to useCallback
    const boardFormCallback = async (createBoardInput: CreateBoardInput) => {
        try {
            if (!sticker) throw new Error('sticker is undefined');

            const createBoardResponse = await (API.graphql(
                graphqlOperation(createBoard, { input: createBoardInput }),
            ) as Promise<GraphQLResult<CreateBoardMutation>>);
            const boardId = createBoardResponse.data?.createBoard?.id;

            const updateStickerInput: UpdateStickerInput = {
                id: sticker.id,
                stickerBoardId: boardId,
            };
            const response = await (API.graphql(
                graphqlOperation(updateSticker, {
                    input: updateStickerInput,
                }),
            ) as Promise<GraphQLResult<UpdateStickerMutation>>);
            navigation.navigate('Root', {
                screen: 'Home',
                params: { reload: true },
            });
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    return (
        <View style={styles.container}>
            {sticker == undefined ? (
                <QRScanner callback={qrScannerCallback} />
            ) : (
                <BoardForm callback={boardFormCallback} />
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        padding: 10,
        backgroundColor: '#789',
    },
});
