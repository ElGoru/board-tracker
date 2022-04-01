import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';

import { BoardForm } from '../components/BoardForm';
import { createBoard, updateSticker } from '../graphql/mutations';
import { View } from '../components/Themed';
import {
  CreateBoardInput,
  CreateBoardMutation,
  UpdateStickerInput,
  UpdateStickerMutation,
} from '../types/graphql';
import { PrivateStackScreenProps } from '../navigation/PrivateStackNavigator';

export default function RegisterBoardScreen({
  route,
  navigation,
}: PrivateStackScreenProps<'RegisterBoard'>) {
  const stickerId = route.params.stickerId;

  const onSubmit = useCallback(
    async (createBoardInput: CreateBoardInput) => {
      try {
        const createBoardResponse = await (API.graphql(
          graphqlOperation(createBoard, { input: createBoardInput }),
        ) as Promise<GraphQLResult<CreateBoardMutation>>);
        const boardId = createBoardResponse.data?.createBoard?.id;
        const updateStickerInput: UpdateStickerInput = {
          id: stickerId,
          stickerBoardId: boardId,
        };
        const response = await (API.graphql(
          graphqlOperation(updateSticker, {
            input: updateStickerInput,
          }),
        ) as Promise<GraphQLResult<UpdateStickerMutation>>);
        navigation.navigate('PrivateTabNavigator', {
          screen: 'Home',
          params: { reload: true },
        });
      } catch (err) {
        console.log(err);
      }
    },
    [stickerId],
  );

  return (
    <View style={styles.container}>
      <BoardForm onSubmit={onSubmit} />
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
