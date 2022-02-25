import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import BoardForm from '../components/BoardForm';
import QRScanner from '../components/QRScanner';
import { getSticker } from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { createBoard, updateSticker } from '../graphql/mutations';
import { View } from '../components/Themed';
import { RootStackScreenProps } from '../types/navigation';
import * as Linking from 'expo-linking';
import {
  CreateBoardInput,
  CreateBoardMutation,
  GetStickerQuery,
  Sticker,
  UpdateStickerInput,
  UpdateStickerMutation,
} from '../src/API';

export default function RegisterBoardScreen({
  navigation,
}: RootStackScreenProps<'RegisterBoardScreen'>) {
  const [sticker, setSticker] = useState<Sticker>();

  const qrScannerCallback = useCallback(async data => {
    const stickerId = Linking.parse(data).path?.replace('/', '');
    if (!stickerId) return;
    try {
      const response = await (API.graphql(
        graphqlOperation(getSticker, { id: stickerId }),
      ) as Promise<GraphQLResult<GetStickerQuery>>);
      if (response.data?.getSticker?.board) {
        navigation.navigate('Index', {
          stickerId: response.data?.getSticker?.id,
        });
        return;
      }
      setSticker(response.data?.getSticker || undefined);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const boardFormCallback = useCallback(
    async (createBoardInput: CreateBoardInput) => {
      if (!sticker) return;
      try {
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
      } catch (err) {
        console.log(err);
      }
    },
    [sticker],
  );

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
  },
});
