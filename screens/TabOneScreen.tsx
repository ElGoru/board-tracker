import * as React from 'react';
import { StyleSheet } from 'react-native';
import BoardForm from '../components/BoardForm';
import BoardsList from '../components/BoardsList';

import { FAB } from 'react-native-paper';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({
    navigation,
}: RootTabScreenProps<'TabOne'>) {
    const [isBoardListUpdated, setIsBoardListUpdated] = React.useState(false);

    return (
        <View style={styles.container}>
            <BoardForm setIsBoardListUpdated={setIsBoardListUpdated} />
            <BoardsList
                isUpdated={isBoardListUpdated}
                setIsUpdated={setIsBoardListUpdated}
            />
            <FAB
                style={styles.fab}
                icon="plus"
                onPress={() => console.log('Pressed')}
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
