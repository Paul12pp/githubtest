import { Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../utils/theme';


const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 10,
    paddingHorizontal: 10
  },
  mainTitle:{ 
    textAlign: 'center', 
    fontSize:15, 
    fontWeight:'bold', 
    width:deviceWidth
  },
  SafeAreaView2: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.light
  },
  outerWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  text: { fontSize: 18, color: colors.dark, fontWeight: 'bold' },
  table: {
    flex: 1,
    borderColor: colors.dark,
    borderWidth: 2,
    width: deviceWidth

  },
  tableTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingBottom: 5,
    backgroundColor:colors.lightGray,
    borderBottomWidth: 2,
  },
  tableHead:{
    fontWeight:'bold',
    fontSize:14
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  picker: {
    height: 50,
    width: 150
  }
})
