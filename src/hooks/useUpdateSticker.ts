import { API, graphqlOperation } from 'aws-amplify';
import { useMutation } from 'react-query';
import { GraphQLResult } from '@aws-amplify/api';

import { updateSticker } from '../graphql/mutations';
import { UpdateStickerInput, UpdateStickerMutation } from '../types/graphql';

export const useUpdateSticker = () => {
  return useMutation(async (updateStickerInput: UpdateStickerInput) => {
    try {
      const response = await (API.graphql(
        graphqlOperation(updateSticker, {
          input: updateStickerInput,
        }),
      ) as Promise<GraphQLResult<UpdateStickerMutation>>);
      const sticker = response.data?.updateSticker;
      if (!sticker) throw new Error();
      return sticker;
    } catch (err) {
      console.log(err);
      throw err;
    }
  });
};
