import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        marginRight: 24,
        backgroundColor: THEME.COLORS.BACKGROUND_900,
        borderRadius: 12,
        overflow: 'hidden'
    },
    cover: {
        position: 'relative',
        height: 320,
        width: 240,

        backgroundColor: THEME.COLORS.BACKGROUND_900,
        borderRadius: 12,
        overflow: 'hidden'
    },
    info: {
        position: 'absolute',
        height: 120,
        right: 0,
        bottom: 0,
        left: 0,
        justifyContent: 'flex-end',
        padding: 16
    },
    title: {
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.TEXT
    },
    description: {
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.SM,
        color: THEME.COLORS.CAPTION_400
    }
})
