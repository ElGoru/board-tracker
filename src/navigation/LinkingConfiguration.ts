/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types/navigation';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Index: {
        path: ':stickerId?',
      },
      Root: {
        screens: {
          Home: 'HomeScreen',
          Find: 'FindScreen',
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
