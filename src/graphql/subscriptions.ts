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
      locations {
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
  }
`;
export const onUpdateBoard = /* GraphQL */ `
  subscription OnUpdateBoard($owner: String) {
    onUpdateBoard(owner: $owner) {
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
      locations {
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
  }
`;
export const onDeleteBoard = /* GraphQL */ `
  subscription OnDeleteBoard($owner: String) {
    onDeleteBoard(owner: $owner) {
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
      locations {
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
  }
`;
export const onCreateSticker = /* GraphQL */ `
  subscription OnCreateSticker {
    onCreateSticker {
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
      owner
    }
  }
`;
export const onUpdateSticker = /* GraphQL */ `
  subscription OnUpdateSticker {
    onUpdateSticker {
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
      owner
    }
  }
`;
export const onDeleteSticker = /* GraphQL */ `
  subscription OnDeleteSticker {
    onDeleteSticker {
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
      owner
    }
  }
`;
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
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
      owner
    }
  }
`;
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
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
      owner
    }
  }
`;
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
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
      owner
    }
  }
`;
