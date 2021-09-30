/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBoard = /* GraphQL */ `
  mutation CreateBoard(
    $input: CreateBoardInput!
    $condition: ModelBoardConditionInput
  ) {
    createBoard(input: $input, condition: $condition) {
      id
      brand
      model
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateBoard = /* GraphQL */ `
  mutation UpdateBoard(
    $input: UpdateBoardInput!
    $condition: ModelBoardConditionInput
  ) {
    updateBoard(input: $input, condition: $condition) {
      id
      brand
      model
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteBoard = /* GraphQL */ `
  mutation DeleteBoard(
    $input: DeleteBoardInput!
    $condition: ModelBoardConditionInput
  ) {
    deleteBoard(input: $input, condition: $condition) {
      id
      brand
      model
      description
      createdAt
      updatedAt
    }
  }
`;
export const createSticker = /* GraphQL */ `
  mutation CreateSticker(
    $input: CreateStickerInput!
    $condition: ModelStickerConditionInput
  ) {
    createSticker(input: $input, condition: $condition) {
      id
      size
      color
      createdAt
      updatedAt
    }
  }
`;
export const updateSticker = /* GraphQL */ `
  mutation UpdateSticker(
    $input: UpdateStickerInput!
    $condition: ModelStickerConditionInput
  ) {
    updateSticker(input: $input, condition: $condition) {
      id
      size
      color
      createdAt
      updatedAt
    }
  }
`;
export const deleteSticker = /* GraphQL */ `
  mutation DeleteSticker(
    $input: DeleteStickerInput!
    $condition: ModelStickerConditionInput
  ) {
    deleteSticker(input: $input, condition: $condition) {
      id
      size
      color
      createdAt
      updatedAt
    }
  }
`;
