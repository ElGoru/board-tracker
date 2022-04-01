import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB, useTheme } from 'react-native-paper';

import BoardsList from '../components/BoardsList';
import { View } from '../components/Themed';
import { useBoards } from '../hooks/useBoards';
import { PrivateTabScreenProps } from '../navigation/PrivateTabNavigator';

export default function HomeScreen({
  navigation,
}: PrivateTabScreenProps<'Home'>) {
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
        onPress={() => navigation.navigate('StickerScanner')}
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
