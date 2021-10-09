import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function IndexScreen({
    route,
    navigation,
}: RootStackScreenProps<'Index'>) {
    return (
        <View style={styles.container}>
            <Text>{route.params?.stickerId}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
