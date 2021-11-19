import * as React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Text } from 'react-native-paper';
import { View } from '../components/Themed';
import { Board } from '../src/API';

export default function BoardsList(props: { boards: Board[] }) {
    const renderBoard: ListRenderItem<Board> = ({ item }) => (
        <View key={item.id}>
            <Text>
                {item.brand}-{item.model}
            </Text>
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
