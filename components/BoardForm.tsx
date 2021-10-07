import * as React from 'react';

import { TextInput, Button } from 'react-native-paper';

import { Text, View } from '../components/Themed';

import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { createBoard } from '../src/graphql/mutations';
import { Board, CreateBoardInput, CreateBoardMutation } from '../src/API';

export default function BoardForm(props: {
    callback: (createBoardInput: CreateBoardInput) => Promise<boolean>;
}) {
    const formInitialState: CreateBoardInput = {
        brand: '',
        model: '',
        description: '',
    };
    const [formState, setFormState] = React.useState(formInitialState);

    function setInput(key: any, value: any) {
        setFormState({ ...formState, [key]: value });
    }

    function addBoard() {
        var isValid = validateInputs();
        if (!isValid) return;
        const board = { ...formState };
        setFormState(formInitialState);
        props.callback(board);
    }

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
}
