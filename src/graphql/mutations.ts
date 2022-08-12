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
export const createSticker = /* GraphQL */ `
  mutation CreateSticker(
    $input: CreateStickerInput!
    $condition: ModelStickerConditionInput
  ) {
    createSticker(input: $input, condition: $condition) {
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
export const updateSticker = /* GraphQL */ `
  mutation UpdateSticker(
    $input: UpdateStickerInput!
    $condition: ModelStickerConditionInput
  ) {
    updateSticker(input: $input, condition: $condition) {
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
export const deleteSticker = /* GraphQL */ `
  mutation DeleteSticker(
    $input: DeleteStickerInput!
    $condition: ModelStickerConditionInput
  ) {
    deleteSticker(input: $input, condition: $condition) {
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
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
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
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
