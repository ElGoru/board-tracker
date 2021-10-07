import * as React from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { Text, View } from '../components/Themed';

import { API, graphqlOperation } from 'aws-amplify';
import { listBoards } from '../src/graphql/queries';
import { Board } from '../src/API';
import { Dispatch, SetStateAction } from 'react';

export default function BoardsList(props: { boards: Board[] }) {
    const renderBoard: ListRenderItem<Board> = ({ item }) => (
        <View key={item.id}>
            <Text>{item.brand}</Text>
            <Text>{item.model}</Text>
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
