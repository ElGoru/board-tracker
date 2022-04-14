import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { API } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';

import { View } from '../components/Themed';
import { getSticker } from '../graphql/queries';
import { createLocation } from '../graphql/mutations';
import { getLocation } from '../helpers';
import { PublicStackScreenProps } from '../navigation/PublicStackNavigator';
import {
  CreateLocationInput,
  CreateLocationMutation,
  GetStickerQuery,
  Sticker,
} from '../types/graphql';

export const IndexScreen = ({
  route,
  navigation,
}: PublicStackScreenProps<'Index'>) => {
  const [sticker, setSticker] = React.useState<Sticker>();

  React.useEffect(() => {
    const stickerId = route.params?.stickerId;
    if (!stickerId) return;
    fetchSticker(stickerId);
  }, []);

  React.useEffect(() => {
    setBoardLocation();
  }, [sticker]);

  const fetchSticker = async (stickerId: string) => {
    try {
      const response = await (API.graphql({
        query: getSticker,
        variables: { id: stickerId },
        authMode: 'API_KEY',
      }) as Promise<GraphQLResult<GetStickerQuery>>);
      setSticker((response.data?.getSticker as Sticker) ?? undefined);
    } catch (err) {
      console.log(`error: ${err}`);
    }
  };

  const setBoardLocation = async () => {
    try {
      const location = await getLocation();
      if (!location || !sticker?.board) return;

      const createLocationInput: CreateLocationInput = {
        Latitude: location?.coords.latitude,
        Longitude: location?.coords.longitude,
        locationBoardId: sticker?.board?.id,
      };
      await (API.graphql({
        query: createLocation,
        variables: { input: createLocationInput },
        authMode: 'API_KEY',
      }) as Promise<GraphQLResult<CreateLocationMutation>>);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{sticker?.board?.owner}</Text>
      <Text>{sticker?.board?.brand}</Text>
      <Text>{route.params?.stickerId}</Text>
      <Button
        onPress={() =>
          navigation.navigate('PrivateNavigator', {
            screen: 'PrivateTabNavigator',
          })
        }>
        Go to home screen!
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
