import { StyleSheet } from 'react-native'
import { StatusBar, Platform } from 'react-native'

const mtNonIos = Platform.OS != 'ios' ? (StatusBar.currentHeight ?? 0) + 74 : 74

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        width: 214,
        height: 120,
        marginTop: mtNonIos,
        alignSelf: 'center'
    },
    gameList: {
        paddingLeft: 24
        // paddingRight: 100
    },
    separator: {
        width: 24
    }
})
