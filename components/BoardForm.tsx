import * as React from 'react';

import { TextInput, Button } from 'react-native-paper';

import { Text, View } from '../components/Themed';

import { API, graphqlOperation } from 'aws-amplify';
import { createBoard } from '../src/graphql/mutations';
import { Board, CreateBoardInput } from '../src/API';
import { Dispatch, SetStateAction } from 'react';

const formInitialState: CreateBoardInput = {
    brand: '',
    model: '',
    description: '',
};
export default function BoardForm(props: {
    setIsBoardListUpdated: Dispatch<SetStateAction<boolean>>;
}) {
    const [formState, setFormState] = React.useState(formInitialState);

    function setInput(key: any, value: any) {
        setFormState({ ...formState, [key]: value });
    }

    async function addBoard() {
        try {
            const board = { ...formState };
            setFormState(formInitialState);
            validateInputs();
            await API.graphql(graphqlOperation(createBoard, { input: board }));
            props.setIsBoardListUpdated(false);
        } catch (err) {
            console.log('error creating board:', err);
        }
    }

    const validateInputs = () => {
        if (formState.brand == '' || formState.model == '') {
            throw Error('fields required');
        }
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
