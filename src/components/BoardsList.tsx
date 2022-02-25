import * as React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { View } from '../components/Themed';
import { Board } from '../src/API';
import BoardItem from './BoardItem';

export default function BoardsList(props: { boards: Board[] }) {
  const renderBoard: ListRenderItem<Board> = ({ item }) => (
    <View key={item.id}>
      <BoardItem board={item} />
    </View>
  );

  return (
    <FlatList
      data={props.boards}
      renderItem={renderBoard}
      keyExtractor={item => item.id}
    />
  );
}
