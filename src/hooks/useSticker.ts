import { useQuery } from 'react-query';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';

import { getSticker } from '../graphql/queries';
import { GetStickerQuery, Sticker } from '../types/graphql';

export const useSticker = (id: string, enabled = true) => {
  return useQuery<Sticker>(
    ['sticker', id],
    async () => {
      try {
        const response = await (API.graphql(
          graphqlOperation(getSticker, { id: id }),
        ) as Promise<GraphQLResult<GetStickerQuery>>);
        const sticker = response.data?.getSticker;
        if (!sticker) throw new Error();
        return sticker;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    { enabled },
  );
};
