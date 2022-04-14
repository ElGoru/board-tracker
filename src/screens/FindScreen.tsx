import React from 'react';
import { GraphQLResult } from '@aws-amplify/api';
import { API, graphqlOperation } from 'aws-amplify';
import { Dimensions, Platform, StyleSheet, Text } from 'react-native';
import MapView, {
  Callout,
  LatLng,
  Marker,
  MarkerProps,
} from 'react-native-maps';

import { View } from '../components/Themed';
import { listBoards } from '../graphql/queries';
import { Board, ListBoardsQuery } from '../types/graphql';
import { getLocation, notEmpty } from '../helpers';

type Region = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

export const FindScreen = () => {
  const [boards, setBoards] = React.useState<Board[]>([]);
  const [markers, setMarkers] = React.useState<MarkerProps[]>([]);
  const [region, setRegion] = React.useState<Region>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 1,
    longitudeDelta: 1,
  });

  React.useEffect(() => {
    fetchBoards();
    setInitialRegion();
  }, []);

  React.useEffect(() => {
    const markers: MarkerProps[] = boards
      .map(board => {
        const location = board.locations?.items?.filter(notEmpty)[0];
        if (!location) return;
        const coordinate: LatLng = {
          latitude: location.Latitude,
          longitude: location.Longitude,
        };
        return { coordinate, title: board.model };
      })
      .filter(notEmpty);
    setMarkers(markers);
  }, [boards]);

  const setInitialRegion = async () => {
    try {
      const location = await getLocation();
      if (!location) return;
      setRegion({
        ...region,
        latitude: location?.coords.latitude,
        longitude: location?.coords.longitude,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchBoards = async () => {
    try {
      const response = await (API.graphql(
        graphqlOperation(listBoards),
      ) as Promise<GraphQLResult<ListBoardsQuery>>);
      const boards = response.data?.listBoards?.items ?? [];
      const filteredBoards = boards.filter(notEmpty);
      setBoards(filteredBoards as Board[]);
    } catch (err) {
      console.log('error fetching boards');
    }
  };

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(region)}</Text>
      {Platform.OS != 'web' && (
        <MapView style={styles.map} region={region}>
          {markers.map((marker, index) => (
            <Marker key={index} coordinate={marker.coordinate}>
              <Callout>
                <Text>{marker.title}</Text>
              </Callout>
            </Marker>
          ))}
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
