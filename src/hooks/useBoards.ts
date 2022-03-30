import { useQuery } from 'react-query';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';

import { listBoards } from '../graphql/queries';
import { Board, ListBoardsQuery } from '../types/graphql';
import { notEmpty } from '../helpers';

export const useBoards = () => {
  return useQuery<Board[], Error>(
    'boards',
    async () => {
      try {
        const response = await (API.graphql(
          graphqlOperation(listBoards),
        ) as Promise<GraphQLResult<ListBoardsQuery>>);
        const boards = response.data?.listBoards?.items ?? [];
        return boards.filter(notEmpty);
      } catch (err) {
        console.log(err);
        return [];
      }
    },
    { refetchOnWindowFocus: true },
  );
};
