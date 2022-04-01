import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { View } from '../components/Themed';
import { CreateBoardInput } from '../types/graphql';

export const BoardForm = (props: {
  onSubmit: (createBoardInput: CreateBoardInput) => Promise<void>;
}) => {
  const formInitialState: CreateBoardInput = {
    brand: '',
    model: '',
    description: '',
  };
  const [formState, setFormState] = useState(formInitialState);

  const setInput = (key: any, value: any) => {
    setFormState({ ...formState, [key]: value });
  };

  const addBoard = () => {
    var isValid = validateInputs();
    if (!isValid) return;
    const board = { ...formState };
    setFormState(formInitialState);
    props.onSubmit(board);
  };

  const validateInputs = () => {
    if (formState.brand == '' || formState.model == '') {
      return false;
    }
    return true;
  };

  return (
    <View>
      <TextInput
        onChangeText={val => setInput('brand', val)}
        value={formState.brand}
        placeholder="Brand"
        mode="outlined"
        multiline={false}
      />
      <TextInput
        onChangeText={val => setInput('model', val)}
        value={formState.model}
        placeholder="Model"
        mode="outlined"
        multiline={false}
      />
      <TextInput
        onChangeText={val => setInput('description', val)}
        value={formState.description ?? undefined}
        placeholder="Description"
        mode="outlined"
        multiline={true}
      />
      <Button onPress={addBoard}>Register Board</Button>
    </View>
  );
};
