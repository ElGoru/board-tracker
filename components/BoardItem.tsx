import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Board } from '../src/API';

const BoardItem = (props: { board: Board }) => {
    return (
        <Card style={styles.container}>
            <Card.Content>
                <Title>
                    {props.board.brand}-{props.board.model}
                </Title>
                <Paragraph>{props.board.description}</Paragraph>
            </Card.Content>
        </Card>
    );
};

export default BoardItem;

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
});
