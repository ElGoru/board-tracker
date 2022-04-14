import { API, graphqlOperation } from 'aws-amplify';
import { useMutation, useQueryClient } from 'react-query';
import { GraphQLResult } from '@aws-amplify/api';

import { createBoard } from '../graphql/mutations';
import { CreateBoardInput, CreateBoardMutation } from '../types/graphql';

export const useCreateBoard = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (createBoardInput: CreateBoardInput) => {
      try {
        const response = await (API.graphql(
          graphqlOperation(createBoard, { input: createBoardInput }),
        ) as Promise<GraphQLResult<CreateBoardMutation>>);
        const board = response.data?.createBoard;
        if (!board) throw new Error();
        return board;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    {
      onSuccess: (data, variables) => {
        queryClient.invalidateQueries('boards');
      },
    },
  );
};
