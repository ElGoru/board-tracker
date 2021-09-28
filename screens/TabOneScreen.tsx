import * as React from 'react';
import {
  StyleSheet,
  Button,
  TextInput,
  FlatList,
  ListRenderItem,
} from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { API, graphqlOperation } from 'aws-amplify';
import { createBoard } from '../src/graphql/mutations';
import { listBoards } from '../src/graphql/queries';
import { Board, CreateBoardInput } from '../src/API';

const formInitialState: CreateBoardInput = {
  brand: '',
  model: '',
};
export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const [formState, setFormState] = React.useState(formInitialState);
  const [boards, setBoards] = React.useState<Board[]>([]);

  React.useEffect(() => {
    fetchBoards();
  }, []);

  function setInput(key: any, value: any) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchBoards() {
    try {
      const boardData: any = await API.graphql(graphqlOperation(listBoards));
      const boards = boardData.data.listBoards.items;
      setBoards(boards);
    } catch (err) {
      console.log('error fetching boards');
    }
  }

  async function addBoard() {
    try {
      const board = { ...formState };
      setFormState(formInitialState);
      await API.graphql(graphqlOperation(createBoard, { input: board }));
      await fetchBoards();
    } catch (err) {
      console.log('error creating board:', err);
    }
  }

  const renderBoard: ListRenderItem<Board> = ({ item }) => (
    <View key={item.id} style={styles.todo}>
      <Text style={styles.todoName}>{item.brand}</Text>
      <Text>{item.model}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TextInput
        onChangeText={(val) => setInput('brand', val)}
        style={styles.input}
        value={formState.brand}
        placeholder="Brand"
      />
      <TextInput
        onChangeText={(val) => setInput('model', val)}
        style={styles.input}
        value={formState.model}
        placeholder="Model"
      />
      <TextInput
        onChangeText={(val) => setInput('description', val)}
        style={styles.input}
        value={formState.description ?? undefined}
        placeholder="Description"
      />
      <Button title="Create Todo" onPress={addBoard} />
      <FlatList
        data={boards}
        renderItem={renderBoard}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  todo: { marginBottom: 15 },
  input: {
    height: 50,
    width: 100,
    backgroundColor: '#ddd',
    marginBottom: 10,
    padding: 8,
  },
  todoName: { fontSize: 18 },
});
