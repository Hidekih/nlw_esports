import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
    container: { marginHorizontal: 24, marginBottom: 20 },
    title: {
        fontFamily: THEME.FONT_FAMILY.BLACK,
        fontSize: THEME.FONT_SIZE.LG,
        color: THEME.COLORS.TEXT
    },
    description: {
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.CAPTION_300
    }
})
