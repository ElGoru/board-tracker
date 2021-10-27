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
      locations {
        items {
          id
          Latitude
          Longitude
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
        locations {
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
        locations {
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
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      Latitude
      Longitude
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
        locations {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Latitude
        Longitude
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
