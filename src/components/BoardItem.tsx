import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

import { Board } from '../types/graphql';

const BoardItem = ({ board }: { board: Board }) => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title>
          {board.brand}-{board.model}
        </Title>
        <Paragraph>{board.description}</Paragraph>
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
