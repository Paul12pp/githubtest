import { Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../utils/theme';


const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    SafeAreaView2: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.light
    },
    outerWrapper: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10
        // width:deviceWidth
        // justifyContent: 'center',
        // backgroundColor: 'red'
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 100
    },
    titles: {
        fontWeight: 'bold',
        paddingHorizontal: 5
    },
    rows: { flexDirection: 'row' },
    username: {
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 5,
        paddingBottom: 10
    },
    modalv: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    modalsv: {
        width: 300,
        height: 400,
        backgroundColor: colors.success,
        borderColor: 'black',
        borderWidth: 2,
        padding: 10
    },
    link: { padding: 4, color: 'blue' },
    modalvTtitles: { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10 },
    centered:{
         alignItems: 'center' 
    },
    iconBack:{ alignSelf: 'flex-start' }
})