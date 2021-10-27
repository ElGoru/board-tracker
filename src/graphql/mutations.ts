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
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
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
