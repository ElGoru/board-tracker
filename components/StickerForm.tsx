import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, ToggleButton } from 'react-native-paper';

import { API, graphqlOperation } from 'aws-amplify';
import { createSticker } from '../src/graphql/mutations';
import { Sticker, StickerSize, CreateStickerInput } from '../src/API';
import QRSticker from './QRSticker';

const formInitialState: CreateStickerInput = {
    size: StickerSize.M,
    color: '#000',
};

export default function StickerForm() {
    const [sticker, setSticker] = React.useState<Sticker>();
    const [formState, setFormState] = React.useState(formInitialState);

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
        <View>
            <ToggleButton.Row
                onValueChange={value =>
                    setFormState({
                        ...formState,
                        ['size']:
                            StickerSize[value as keyof typeof StickerSize],
                    })
                }
                value={formState.size}
            >
                <ToggleButton icon="format-align-left" value={StickerSize.S} />
                <ToggleButton icon="format-align-right" value={StickerSize.M} />
            </ToggleButton.Row>

            <TextInput
                onChangeText={value =>
                    setFormState({ ...formState, ['color']: value })
                }
                value={formState.color}
                placeholder="Color"
            />

            <Button icon="qrcode" onPress={() => addSticker()}>
                Generate QR sticker
            </Button>

            {sticker != undefined && <QRSticker sticker={sticker} />}
        </View>
    );
}

const styles = StyleSheet.create({});
