import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, ToggleButton } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import { API, graphqlOperation } from 'aws-amplify';

import { createSticker } from '../graphql/mutations';
import { Sticker, StickerSize, CreateStickerInput } from '../types/graphql';

import { QRSticker } from './QRSticker';

const formInitialState: CreateStickerInput = {
  size: StickerSize.M,
  color: '#000',
};

export default function StickerForm() {
  const [sticker, setSticker] = React.useState<Sticker>();
  const [formState, setFormState] = React.useState(formInitialState);

  const theme = useTheme();

  async function addSticker() {
    try {
      const sticker = { ...formState };
      setFormState(formInitialState);
      const response: any = await API.graphql(
        graphqlOperation(createSticker, { input: sticker }),
      );
      setSticker(response.data.createSticker);
    } catch (err) {
      console.log('error creating sticker:', err);
    }
  }

  return (
    <View style={styles.container}>
      <ToggleButton.Row
        onValueChange={value =>
          setFormState({
            ...formState,
            ['size']: StickerSize[value as keyof typeof StickerSize],
          })
        }
        value={formState.size}>
        <ToggleButton
          icon="qrcode"
          size={20}
          value={StickerSize.S}
          style={styles.qrToggleButton}
        />
        <ToggleButton
          icon="qrcode"
          size={30}
          value={StickerSize.M}
          style={styles.qrToggleButton}
        />
        <ToggleButton
          icon="qrcode"
          size={40}
          value={StickerSize.L}
          style={styles.qrToggleButton}
        />
        <ToggleButton
          icon="qrcode"
          size={50}
          value={StickerSize.XL}
          style={styles.qrToggleButton}
        />
      </ToggleButton.Row>

      <TextInput
        onChangeText={value => setFormState({ ...formState, ['color']: value })}
        value={formState.color}
        placeholder="Color"
        mode="outlined"
        multiline={false}
        style={styles.colorInput}
      />

      <Button
        icon="qrcode"
        onPress={() => addSticker()}
        style={styles.generateButton}>
        Generate QR sticker
      </Button>

      {sticker != undefined && <QRSticker sticker={sticker} />}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  qrToggleButton: {
    height: 60,
    width: 60,
  },
  colorInput: {
    width: 240,
    marginVertical: 10,
  },
  generateButton: {
    marginBottom: 10,
  },
});
