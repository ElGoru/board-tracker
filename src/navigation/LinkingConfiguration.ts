/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';
import { LinkingOptions } from '@react-navigation/native';

import { RootStackParamList } from '.';

export const linkingConfiguration: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      PublicNavigator: {
        screens: {
          Index: {
            path: ':stickerId?',
          },
          NotFound: '*',
        },
      },
      PrivateNavigator: {
        screens: {
          PrivateTabNavigator: {
            screens: {
              Home: {
                path: 'home/',
              },
              Find: {
                path: 'find/',
              },
            },
          },
          Modal: {
            path: 'modal/',
          },
          StickerScanner: {
            path: 'stickerscanner/',
          },
          RegisterBoard: {
            path: 'registerboard/:stickerId',
          },
        },
      },
    },
  },
};
