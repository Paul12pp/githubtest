import { Dimensions, StyleSheet } from 'react-native'


const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 10,
    paddingHorizontal: 10
  },
  SafeAreaView1: { backgroundColor: '#FFF', flex: 0 },
  SafeAreaView2: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  outerWrapper: {
    flex: 1,
    alignItems: 'center',
    // width:deviceWidth
    // justifyContent: 'center',
    // backgroundColor: 'red'
  },
  buttonStyle: {
    backgroundColor: '#EEE',
    paddingHorizontal: 40,
    paddingVertical: 30,
    borderWidth: 0.5,
    borderColor: '#F0F0F0',
    borderRadius: 10
  },
  text: { fontSize: 18, color: 'black', fontWeight: 'bold' },
  table: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 2,
    width: deviceWidth

  },
  tableTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingBottom: 5,
    fontSize: 20,
    borderBottomWidth: 2
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
