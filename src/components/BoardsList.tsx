import * as React from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { View } from '../components/Themed';
import { Board } from '../types/graphql';

import BoardItem from './BoardItem';

export const BoardsList = ({ boards }: { boards: Board[] }) => {
  const renderBoard: ListRenderItem<Board> = ({ item }) => (
    <View key={item.id}>
      <BoardItem board={item} />
    </View>
  );

  return (
    <FlatList
      data={boards}
      renderItem={renderBoard}
      keyExtractor={item => item.id}
    />
  );
};
