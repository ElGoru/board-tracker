/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBoardInput = {
  id?: string | null,
  brand: string,
  model: string,
  description?: string | null,
};

export type ModelBoardConditionInput = {
  brand?: ModelStringInput | null,
  model?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelBoardConditionInput | null > | null,
  or?: Array< ModelBoardConditionInput | null > | null,
  not?: ModelBoardConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Board = {
  __typename: "Board",
  id: string,
  brand: string,
  model: string,
  description?: string | null,
  stickers?: ModelStickerConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelStickerConnection = {
  __typename: "ModelStickerConnection",
  items?:  Array<Sticker | null > | null,
  nextToken?: string | null,
};

export type Sticker = {
  __typename: "Sticker",
  id: string,
  size: StickerSize,
  color: string,
  board?: Board | null,
  createdAt: string,
  updatedAt: string,
};

export enum StickerSize {
  XL = "XL",
  L = "L",
  M = "M",
  S = "S",
}


export type UpdateBoardInput = {
  id: string,
  brand?: string | null,
  model?: string | null,
  description?: string | null,
};

export type DeleteBoardInput = {
  id: string,
};

export type CreateStickerInput = {
  id?: string | null,
  size: StickerSize,
  color: string,
  stickerBoardId?: string | null,
};

export type ModelStickerConditionInput = {
  size?: ModelStickerSizeInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelStickerConditionInput | null > | null,
  or?: Array< ModelStickerConditionInput | null > | null,
  not?: ModelStickerConditionInput | null,
};

export type ModelStickerSizeInput = {
  eq?: StickerSize | null,
  ne?: StickerSize | null,
};

export type UpdateStickerInput = {
  id: string,
  size?: StickerSize | null,
  color?: string | null,
  stickerBoardId?: string | null,
};

export type DeleteStickerInput = {
  id: string,
};

export type ModelBoardFilterInput = {
  id?: ModelIDInput | null,
  brand?: ModelStringInput | null,
  model?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelBoardFilterInput | null > | null,
  or?: Array< ModelBoardFilterInput | null > | null,
  not?: ModelBoardFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBoardConnection = {
  __typename: "ModelBoardConnection",
  items?:  Array<Board | null > | null,
  nextToken?: string | null,
};

export type ModelStickerFilterInput = {
  id?: ModelIDInput | null,
  size?: ModelStickerSizeInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelStickerFilterInput | null > | null,
  or?: Array< ModelStickerFilterInput | null > | null,
  not?: ModelStickerFilterInput | null,
};

export type CreateBoardMutationVariables = {
  input: CreateBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type CreateBoardMutation = {
  createBoard?:  {
    __typename: "Board",
    id: string,
    brand: string,
    model: string,
    description?: string | null,
    stickers?:  {
      __typename: "ModelStickerConnection",
      items?:  Array< {
        __typename: "Sticker",
        id: string,
        size: StickerSize,
        color: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBoardMutationVariables = {
  input: UpdateBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type UpdateBoardMutation = {
  updateBoard?:  {
    __typename: "Board",
    id: string,
    brand: string,
    model: string,
    description?: string | null,
    stickers?:  {
      __typename: "ModelStickerConnection",
      items?:  Array< {
        __typename: "Sticker",
        id: string,
        size: StickerSize,
        color: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBoardMutationVariables = {
  input: DeleteBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type DeleteBoardMutation = {
  deleteBoard?:  {
    __typename: "Board",
    id: string,
    brand: string,
    model: string,
    description?: string | null,
    stickers?:  {
      __typename: "ModelStickerConnection",
      items?:  Array< {
        __typename: "Sticker",
        id: string,
        size: StickerSize,
        color: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStickerMutationVariables = {
  input: CreateStickerInput,
  condition?: ModelStickerConditionInput | null,
};

export type CreateStickerMutation = {
  createSticker?:  {
    __typename: "Sticker",
    id: string,
    size: StickerSize,
    color: string,
    board?:  {
      __typename: "Board",
      id: string,
      brand: string,
      model: string,
      description?: string | null,
      stickers?:  {
        __typename: "ModelStickerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStickerMutationVariables = {
  input: UpdateStickerInput,
  condition?: ModelStickerConditionInput | null,
};

export type UpdateStickerMutation = {
  updateSticker?:  {
    __typename: "Sticker",
    id: string,
    size: StickerSize,
    color: string,
    board?:  {
      __typename: "Board",
      id: string,
      brand: string,
      model: string,
      description?: string | null,
      stickers?:  {
        __typename: "ModelStickerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStickerMutationVariables = {
  input: DeleteStickerInput,
  condition?: ModelStickerConditionInput | null,
};

export type DeleteStickerMutation = {
  deleteSticker?:  {
    __typename: "Sticker",
    id: string,
    size: StickerSize,
    color: string,
    board?:  {
      __typename: "Board",
      id: string,
      brand: string,
      model: string,
      description?: string | null,
      stickers?:  {
        __typename: "ModelStickerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBoardQueryVariables = {
  id: string,
};

export type GetBoardQuery = {
  getBoard?:  {
    __typename: "Board",
    id: string,
    brand: string,
    model: string,
    description?: string | null,
    stickers?:  {
      __typename: "ModelStickerConnection",
      items?:  Array< {
        __typename: "Sticker",
        id: string,
        size: StickerSize,
        color: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBoardsQueryVariables = {
  filter?: ModelBoardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBoardsQuery = {
  listBoards?:  {
    __typename: "ModelBoardConnection",
    items?:  Array< {
      __typename: "Board",
      id: string,
      brand: string,
      model: string,
      description?: string | null,
      stickers?:  {
        __typename: "ModelStickerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetStickerQueryVariables = {
  id: string,
};

export type GetStickerQuery = {
  getSticker?:  {
    __typename: "Sticker",
    id: string,
    size: StickerSize,
    color: string,
    board?:  {
      __typename: "Board",
      id: string,
      brand: string,
      model: string,
      description?: string | null,
      stickers?:  {
        __typename: "ModelStickerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStickersQueryVariables = {
  filter?: ModelStickerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStickersQuery = {
  listStickers?:  {
    __typename: "ModelStickerConnection",
    items?:  Array< {
      __typename: "Sticker",
      id: string,
      size: StickerSize,
      color: string,
      board?:  {
        __typename: "Board",
        id: string,
        brand: string,
        model: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBoardSubscription = {
  onCreateBoard?:  {
    __typename: "Board",
    id: string,
    brand: string,
    model: string,
    description?: string | null,
    stickers?:  {
      __typename: "ModelStickerConnection",
      items?:  Array< {
        __typename: "Sticker",
        id: string,
        size: StickerSize,
        color: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBoardSubscription = {
  onUpdateBoard?:  {
    __typename: "Board",
    id: string,
    brand: string,
    model: string,
    description?: string | null,
    stickers?:  {
      __typename: "ModelStickerConnection",
      items?:  Array< {
        __typename: "Sticker",
        id: string,
        size: StickerSize,
        color: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBoardSubscription = {
  onDeleteBoard?:  {
    __typename: "Board",
    id: string,
    brand: string,
    model: string,
    description?: string | null,
    stickers?:  {
      __typename: "ModelStickerConnection",
      items?:  Array< {
        __typename: "Sticker",
        id: string,
        size: StickerSize,
        color: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStickerSubscription = {
  onCreateSticker?:  {
    __typename: "Sticker",
    id: string,
    size: StickerSize,
    color: string,
    board?:  {
      __typename: "Board",
      id: string,
      brand: string,
      model: string,
      description?: string | null,
      stickers?:  {
        __typename: "ModelStickerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStickerSubscription = {
  onUpdateSticker?:  {
    __typename: "Sticker",
    id: string,
    size: StickerSize,
    color: string,
    board?:  {
      __typename: "Board",
      id: string,
      brand: string,
      model: string,
      description?: string | null,
      stickers?:  {
        __typename: "ModelStickerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStickerSubscription = {
  onDeleteSticker?:  {
    __typename: "Sticker",
    id: string,
    size: StickerSize,
    color: string,
    board?:  {
      __typename: "Board",
      id: string,
      brand: string,
      model: string,
      description?: string | null,
      stickers?:  {
        __typename: "ModelStickerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
