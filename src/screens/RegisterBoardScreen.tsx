import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { BoardForm } from '../components/BoardForm';
import { View } from '../components/Themed';
import { CreateBoardInput } from '../types/graphql';
import { PrivateStackScreenProps } from '../navigation/PrivateStackNavigator';
import { useCreateBoard } from '../hooks/useCreateBoard';
import { useUpdateSticker } from '../hooks/useUpdateSticker';
import { useSticker } from '../hooks/useSticker';

export default function RegisterBoardScreen({
  route,
  navigation,
}: PrivateStackScreenProps<'RegisterBoard'>) {
  const stickerId = route.params.stickerId;
  const sticker = useSticker(stickerId);
  const createBoard = useCreateBoard();
  const updateSticker = useUpdateSticker();

  const onSubmit = async (createBoardInput: CreateBoardInput) => {
    try {
      const board = await createBoard.mutateAsync(createBoardInput);
      await updateSticker.mutateAsync({
        id: stickerId,
        stickerBoardId: board.id,
      });
    } catch (err) {
      // TODO Rollback board creation if update sticker fails
      console.log(err);
    } finally {
      navigation.navigate('PrivateTabNavigator');
    }
  };

  if (sticker.isLoading)
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  if (sticker.isError)
    return (
      <View style={styles.container}>
        <Text>Problems with the sticker</Text>
      </View>
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
