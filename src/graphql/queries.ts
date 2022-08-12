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
      stickers {
        items {
          id
          size
          color
          board {
            id
            brand
            model
            description
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          boardStickersId
          owner
        }
        nextToken
      }
      locations {
        items {
          Latitude
          Longitude
          board {
            id
            brand
            model
            description
            createdAt
            updatedAt
            owner
          }
          id
          createdAt
          updatedAt
          boardLocationsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
        stickers {
          items {
            id
            size
            color
            createdAt
            updatedAt
            boardStickersId
            owner
          }
          nextToken
        }
        locations {
          items {
            Latitude
            Longitude
            id
            createdAt
            updatedAt
            boardLocationsId
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
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
      board {
        id
        brand
        model
        description
        stickers {
          items {
            id
            size
            color
            createdAt
            updatedAt
            boardStickersId
            owner
          }
          nextToken
        }
        locations {
          items {
            Latitude
            Longitude
            id
            createdAt
            updatedAt
            boardLocationsId
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      boardStickersId
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
        board {
          id
          brand
          model
          description
          stickers {
            nextToken
          }
          locations {
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        boardStickersId
        owner
      }
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      Latitude
      Longitude
      board {
        id
        brand
        model
        description
        stickers {
          items {
            id
            size
            color
            createdAt
            updatedAt
            boardStickersId
            owner
          }
          nextToken
        }
        locations {
          items {
            Latitude
            Longitude
            id
            createdAt
            updatedAt
            boardLocationsId
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      id
      createdAt
      updatedAt
      boardLocationsId
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
        Latitude
        Longitude
        board {
          id
          brand
          model
          description
          stickers {
            nextToken
          }
          locations {
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
        id
        createdAt
        updatedAt
        boardLocationsId
        owner
      }
      nextToken
    }
  }
`;
