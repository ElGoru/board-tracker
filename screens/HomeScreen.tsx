import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import BoardsList from '../components/BoardsList';
import { FAB } from 'react-native-paper';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Board, ListBoardsQuery } from '../src/API';
import { API, graphqlOperation } from 'aws-amplify';
import { listBoards } from '../src/graphql/queries';
import { GraphQLResult } from '@aws-amplify/api';
import { notEmpty } from '../src/utils';

export default function HomeScreen({
    route,
    navigation,
}: RootTabScreenProps<'Home'>) {
    const [boards, setBoards] = React.useState<Board[]>([]);

    useEffect(() => {
        fetchBoards();
    }, []);
    useEffect(() => {
        if (route.params?.reload) {
            fetchBoards();
        }
    }, [route.params?.reload]);

    const fetchBoards = async () => {
        try {
            const response = await (API.graphql(
                graphqlOperation(listBoards),
            ) as Promise<GraphQLResult<ListBoardsQuery>>);
            const boards = response.data?.listBoards?.items ?? [];
            const filteredBoards = boards.filter(notEmpty);
            setBoards(filteredBoards);
        } catch (err) {
            console.log('error fetching boards');
        }
    };

    return (
        <View style={styles.container}>
            <BoardsList boards={boards} />
            <FAB
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
        backgroundColor: '#789',
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});
