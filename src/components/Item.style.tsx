import { Dimensions, StyleSheet } from 'react-native'


const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    tableBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        borderBottomWidth: 2
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius:100,
        // padding:
    }
})