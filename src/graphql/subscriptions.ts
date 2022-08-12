/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBoard = /* GraphQL */ `
  subscription OnCreateBoard($owner: String) {
    onCreateBoard(owner: $owner) {
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
export const onUpdateBoard = /* GraphQL */ `
  subscription OnUpdateBoard($owner: String) {
    onUpdateBoard(owner: $owner) {
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
export const onDeleteBoard = /* GraphQL */ `
  subscription OnDeleteBoard($owner: String) {
    onDeleteBoard(owner: $owner) {
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
export const onCreateSticker = /* GraphQL */ `
  subscription OnCreateSticker($owner: String) {
    onCreateSticker(owner: $owner) {
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
export const onUpdateSticker = /* GraphQL */ `
  subscription OnUpdateSticker($owner: String) {
    onUpdateSticker(owner: $owner) {
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
export const onDeleteSticker = /* GraphQL */ `
  subscription OnDeleteSticker($owner: String) {
    onDeleteSticker(owner: $owner) {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation($owner: String) {
    onCreateLocation(owner: $owner) {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation($owner: String) {
    onUpdateLocation(owner: $owner) {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation($owner: String) {
    onDeleteLocation(owner: $owner) {
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
