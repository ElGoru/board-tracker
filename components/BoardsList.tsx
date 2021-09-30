import * as React from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { Text, View } from '../components/Themed';

import { API, graphqlOperation } from 'aws-amplify';
import { listBoards } from '../src/graphql/queries';
import { Board } from '../src/API';
import { Dispatch, SetStateAction } from 'react';

export default function BoardsList(props: {
    isUpdated: boolean;
    setIsUpdated: Dispatch<SetStateAction<boolean>>;
}) {
    const [boards, setBoards] = React.useState<Board[]>([]);

    React.useEffect(() => {
        fetchBoards();
        props.setIsUpdated(true);
    }, [props.isUpdated]);

    async function fetchBoards() {
        try {
            const boardData: any = await API.graphql(
                graphqlOperation(listBoards),
            );
            const boards = boardData.data.listBoards.items;
            setBoards(boards);
        } catch (err) {
            console.log('error fetching boards');
        }
    }

    const renderBoard: ListRenderItem<Board> = ({ item }) => (
        <View key={item.id}>
            <Text>{item.brand}</Text>
            <Text>{item.model}</Text>
        </View>
    );

    return (
        <FlatList
            data={boards}
            renderItem={renderBoard}
            keyExtractor={item => item.id}
        />
    );
}
