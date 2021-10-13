/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBoard = /* GraphQL */ `
  query GetBoard($id: ID!) {
    getBoard(id: $id) {
      id
      brand
      model
      description
      createdAt
      updatedAt
      owner
      stickers {
        items {
          id
          size
          color
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listBoards = /* GraphQL */ `
  query ListBoards(
    $filter: ModelBoardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        brand
        model
        description
        createdAt
        updatedAt
        owner
        stickers {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getSticker = /* GraphQL */ `
  query GetSticker($id: ID!) {
    getSticker(id: $id) {
      id
      size
      color
      createdAt
      updatedAt
      board {
        id
        brand
        model
        description
        createdAt
        updatedAt
        owner
        stickers {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listStickers = /* GraphQL */ `
  query ListStickers(
    $filter: ModelStickerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStickers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        size
        color
        createdAt
        updatedAt
        board {
          id
          brand
          model
          description
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
