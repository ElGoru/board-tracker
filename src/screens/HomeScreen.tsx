import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { FAB, useTheme } from 'react-native-paper';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';

import BoardsList from '../components/BoardsList';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types/navigation';
import { Board, ListBoardsQuery } from '../types/graphql';
import { listBoards } from '../graphql/queries';
import { notEmpty } from '../helpers';
import { useBoards } from '../hooks/useBoards';

export default function HomeScreen({
  route,
  navigation,
}: RootTabScreenProps<'Home'>) {
  let colors = useTheme().colors;

  const { data } = useBoards();
  const boards = data ?? [];

  return (
    <View style={styles.container}>
      <BoardsList boards={boards} />
      <FAB
        color={colors.background}
        style={styles.fab}
        icon="qrcode"
        onPress={() => navigation.navigate('RegisterBoardScreen')}
      />
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
