import * as React from 'react';
import * as Linking from 'expo-linking';
import { StyleSheet, Text } from 'react-native';

import { QRScanner } from '../components/QRScanner';
import { PrivateStackScreenProps } from '../navigation/PrivateStackNavigator';
import { useSticker } from '../hooks/useSticker';
import { View } from '../components/Themed';

export const StickerScannerScreen = ({
  navigation,
}: PrivateStackScreenProps<'StickerScanner'>) => {
  const [stickerId, setStickerId] = React.useState('');
  const { isLoading, isSuccess, isError, data, error, refetch } = useSticker(
    stickerId,
    false,
  );

  React.useEffect(() => {
    if (stickerId == '') return;
    refetch();
  }, [stickerId]);

  React.useEffect(() => {
    if (!isSuccess) return;
    if (data.board) {
      navigation.navigate('PublicNavigator', {
        screen: 'Index',
        params: { stickerId: data.id },
      });
      return;
    }
    navigation.navigate('PrivateNavigator', {
      screen: 'RegisterBoard',
      params: { stickerId: data.id },
    });
    return;
  }, [isSuccess]);

  const onScan = React.useCallback(
    data => {
      const stickerId = Linking.parse(data).path?.replace('/', '');
      if (!stickerId) return;
      setStickerId(stickerId);
    },
    [setStickerId],
  );

  return (
    <View style={styles.container}>
      <QRScanner onScan={onScan} />
      {isLoading && <Text>Loading</Text>}
      {isError && <Text>Loading</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    padding: 10,
  },
});
