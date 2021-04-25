import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image,
  RefreshControl,
} from 'react-native'
import styles from './Home.style'
import { Picker } from '@react-native-picker/picker';
import { connect, useDispatch } from 'react-redux'
import { fetchDataUser, fetchDataUserPlus, changeMomentun, changePerpage, changeSort } from '../../stores/actions/user.action';
import { RootStackNavigationProps } from 'src/navigation/navigation'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Item from '../../components/Item';
import Sorter from '../../utils/Sorter';

interface Props {
  navigation: RootStackNavigationProps<'Home'>;
  user: [];
  isLoading: boolean;
  plus: boolean;
  momentun: boolean;
  per_page: number;
  sort:string;
}
const Home = (props: Props) => {
  const dispatch = useDispatch()

  const plusUser = (last: any) => {
    // console.log(props.per_page);
    dispatch(fetchDataUserPlus({ since: last.id, per_page: props.per_page }));
  }
  const valueChange = (value: number) => {
    dispatch(changePerpage(value))
  }
  const sort = () => {
    dispatch(changeSort(props.sort=='sort-up'?'sort-down':'sort-up'))
  }
  useEffect(() => {
    dispatch(fetchDataUser({ per_page: props.per_page }));
    return () => {
    }
  }, [])
  useEffect(() => {
    console.log('efect',props.sort)
    // console.log('efect',props.user[0])
    // props.user.forEach((value:any,index)=>{
    //  console.log(index,value)
    // })
  })
  return (
    <SafeAreaView style={styles.SafeAreaView2}>
      {/* <View style={styles.outerWrapper}> */}
      {/* <Icon name={'ios-home'} size={100} color={'purple'} /> */}
      <View>
        {props.isLoading &&
          <Text>Cargando</Text>
        }
        {!props.isLoading &&
          <View style={styles.table}>
            <Text style={{ alignSelf: 'center' }}>Lista de usuarios</Text>
            <View style={styles.filter}>
              <Picker
                style={styles.picker}
                onValueChange={(itemValue: number, itemIndex) => valueChange(itemValue)}
              >
                <Picker.Item label="25" value="25" />
                <Picker.Item label="50" value="50" />
                <Picker.Item label="100" value="100" />
              </Picker>
              <Icon name={props.sort} size={24} onPress={sort} />
            </View>
            <View style={styles.tableTitles}>
              <Text>Foto</Text>
              <Text>Usuario</Text>
            </View>
            {/* <Text>{JSON.stringify(props.user)}</Text> */}
            <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={props.plus}
                  //  onRefresh={this.onRefresh}
                  tintColor="red"
                  colors={["red", "green"]}
                />}
              contentContainerStyle={{ flexGrow: 1 }}
              data={Sorter(props.user, 'id', props.sort)}
              // extraData={Sorter(props.user, 'id',props.sort)}
              initialNumToRender={7}
              onEndReachedThreshold={0.1}
              onMomentumScrollBegin={() => { dispatch(changeMomentun()) }}
              onEndReached={({ distanceFromEnd }) => {
                if (!props.momentun) {
                  plusUser(props.user[props.user.length - 1])
                }
              }}
              renderItem={({ item, index }) =>
                <Item item={item} />
              }
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        }

      </View>
      {/* </View> */}
    </SafeAreaView>
  )
}

const mapStateToProps = (state: any) => {
  return {
    user: state.userReducer.users,
    isLoading: state.userReducer.isLoading,
    plus: state.userReducer.plus,
    momentun: state.userReducer.momentun,
    per_page: state.userReducer.per_page,
    sort: state.userReducer.sort,
  }
}

export default connect(mapStateToProps, null)(Home)
