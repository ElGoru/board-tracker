import { AmplifyTheme } from 'aws-amplify-react-native';
import { DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { DarkTheme as PaperDarkTheme } from 'react-native-paper';
import merge from 'deepmerge';
import { Platform } from 'react-native';

const mergedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);
export const CustomDarkTheme = {
    ...mergedDarkTheme,
    roundness: 2,
    colors: {
        ...mergedDarkTheme.colors,
        card: '#232F34',
        primary: '#F9AA33',
        accent: '#F9AA33',
        background: '#344955',
        text: '#eee',
        surface: '#344955',
        border: '#232F34',
    },
};

export const CustomDarkAuthTheme = {
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        width: '100%',
        backgroundColor: CustomDarkTheme.colors.background,
    },
    section: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    sectionScroll: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
    },
    sectionHeader: {
        width: '100%',
        marginBottom: 32,
        paddingTop: 20,
    },
    sectionHeaderText: {
        color: CustomDarkTheme.colors.text,
        fontSize: 20,
        fontWeight: '500',
    },
    sectionFooter: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 20,
    },
    sectionFooterLink: {
        fontSize: 14,
        color: CustomDarkTheme.colors.accent,
        alignItems: 'baseline',
        textAlign: 'center',
    },
    sectionFooterLinkDisabled: {
        fontSize: 14,
        color: CustomDarkTheme.colors.text,
        alignItems: 'baseline',
        textAlign: 'center',
    },
    navBar: {
        marginTop: 35,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    navButton: {
        marginLeft: 12,
        borderRadius: 4,
    },
    cell: {
        flex: 1,
        width: '50%',
    },
    errorRow: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    errorRowIcon: {
        height: 25,
        width: 25,
    },
    errorRowText: {
        marginLeft: 10,
    },
    photo: {
        width: '100%',
    },
    album: {
        width: '100%',
    },
    button: {
        backgroundColor: CustomDarkTheme.colors.accent,
        alignItems: 'center',
        padding: 16,
    },
    buttonDisabled: {
        backgroundColor: CustomDarkTheme.colors.card,
        alignItems: 'center',
        padding: 16,
    },
    buttonText: {
        color: CustomDarkTheme.colors.text,
        fontSize: 14,
        fontWeight: '600',
    },
    formField: {
        marginBottom: 22,
    },
    input: {
        padding: 16,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: CustomDarkTheme.colors.text,
        color: CustomDarkTheme.colors.text,
    },
    inputLabel: {
        marginBottom: 8,
    },
    phoneContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    phoneInput: {
        flex: 2,
        padding: 16,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: CustomDarkTheme.colors.card,
        color: CustomDarkTheme.colors.text,
    },
    picker: {
        flex: 1,
        height: 44,
        // ensure that longer text values render without truncation
        // as the selected value of the Picker on Android
        minWidth: Platform.OS === 'android' ? 16 : 0,
    },
    pickerItem: {
        height: 44,
    },
    signedOutMessage: {
        textAlign: 'center',
        padding: 20,
    },
};
