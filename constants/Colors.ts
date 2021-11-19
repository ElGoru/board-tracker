import { DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { DarkTheme as PaperDarkTheme } from 'react-native-paper';
import merge from 'deepmerge';

let CustomDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);
CustomDarkTheme = {
    ...CustomDarkTheme,
    roundness: 2,
    colors: {
        ...CustomDarkTheme.colors,
        card: '#232F34',
        primary: '#F9AA33',
        accent: '#F9AA33',
        background: '#344955',
        text: '#eee',
    },
};
export default CustomDarkTheme;
