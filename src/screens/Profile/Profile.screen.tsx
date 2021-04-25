import React, { useEffect } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView
} from 'react-native'
import styles from './Profile.style'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RootStackNavigationProps, RootStackParamList } from 'src/navigation/navigation';
import { CommonActions, RouteProp } from '@react-navigation/native';
import { connect, useDispatch } from 'react-redux';
import { fetchDataRepos, fetchDataUser, fetchImageSuccess, fetchFollowUser, showModal, hideModal, changeSelected } from '../../stores/actions/profile.action';
import { Linking } from 'react-native';

interface Props {
  navigation: RootStackNavigationProps<'Profile'>;
  route: RouteProp<RootStackParamList, 'Profile'>;
  user: any,
  isLoading: boolean,
  repos: [],
  loadingRepos: boolean,
  followers: [],
  loadindFollow: boolean,
  modal: boolean,
  selected: any
}
type ModalProps = {
  visible: boolean,
}
const ModalComponent: React.FC<ModalProps> = (props: any) => {
  return (
    <Modal
      visible={props.visible}
      // presentationStyle='overFullScreen'
      animationType='slide'
      transparent={true}
      supportedOrientations={['landscape', 'portrait']}
    >
      { props.children}
    </Modal>
  )
}
const Profile = (props: Props) => {
  const { username } = props.route.params;
  const dispatch = useDispatch()
  const onLoadEnd = () => {
    dispatch(fetchImageSuccess());
  }
  const openModal = (data: any) => {
    dispatch(showModal())
    dispatch(changeSelected(data));
  }
  useEffect(() => {
    dispatch(fetchDataUser(username));
    dispatch(fetchFollowUser(username));
    dispatch(fetchDataRepos(username));
    return () => {
    }
  }, [])
  return (
    <SafeAreaView style={styles.SafeAreaView2}>
      <TouchableOpacity style={styles.iconBack} onPress={() => props.navigation.dispatch(CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Home'}
        ],
      }))}>
        <Icon name={'arrow-left'} size={34} />
      </TouchableOpacity>
      <View style={styles.outerWrapper}>
        {!props.isLoading &&
          <Image style={styles.avatar} source={{ uri: props.user.avatar_url }} resizeMode="contain"
            onLoadEnd={onLoadEnd}
          />
        }
        {!props.isLoading &&
          <View style={styles.centered}>
            <Text style={styles.username}>{props.user.login}</Text>
            <View style={{ alignItems: 'center' }}>
              <View style={styles.rows}>
                <Text style={styles.titles}>Nombre:</Text>
                <Text>{props.user.name ? props.user.name : 'N/A'}</Text>
              </View>
              <Text style={styles.titles}>Bio:</Text>
              <Text>{props.user.bio ? props.user.bio : 'N/A'}</Text>
              <View style={styles.rows}>
                <Text style={styles.titles}>Email:</Text>
                <Text>{props.user.email ? props.user.email : 'N/A'}</Text>
              </View>
              {!props.loadindFollow &&
                <View style={styles.rows}>
                  <Text style={styles.titles}>Followers:</Text>
                  <Text>{props.followers.length > 0 ? props.followers.length : 0}</Text>
                </View>}
              <Text style={styles.titles}>Url:</Text>
              <Text style={styles.link} onPress={() => Linking.openURL(props.user.url)}>{props.user.url}</Text>
              <Text style={[styles.titles, { alignSelf: 'center' }]}>Repos ({props.repos.length}):</Text>
              {!props.loadingRepos &&
                <ScrollView>
                  {props.repos.map((value: any) => {
                    return (
                      <TouchableOpacity key={value.id} onPress={() => openModal(value)}>
                        <Text>{value.name}</Text>
                      </TouchableOpacity>
                    )
                  })}
                </ScrollView>
              }

            </View>
            <ModalComponent visible={props.modal}>
              <View style={styles.modalv}>
                <View style={styles.modalsv}>
                  <View style={styles.modalvTtitles}>
                    <Text style={styles.titles}>Data Repos</Text>
                    <Icon onPress={() => dispatch(hideModal())} name={'times'} size={24} />
                  </View>
                  <View style={styles.rows}>
                    <Text style={styles.titles}>Name:</Text>
                    <Text>{props.selected.name}</Text>
                  </View>
                  <Text style={styles.titles}>Description:</Text>
                  <Text style={{ padding: 4 }}>{props.selected.description ? props.selected.description : 'N/A'}</Text>
                  <View style={styles.rows}>
                    <Text style={styles.titles}>Language:</Text>
                    <Text>{props.selected.language ? props.selected.language : 'N/A'}</Text>
                  </View>
                  <Text style={styles.titles}>Link:</Text>
                  <Text style={styles.link} onPress={() => Linking.openURL(props.selected.html_url)}>{props.selected.html_url}</Text>
                </View>
              </View>
            </ModalComponent>
          </View>
        }
      </View>
    </SafeAreaView>
  )
}

const mapStateToProps = (state: any) => {
  return {
    user: state.profileReducer.user,
    isLoading: state.profileReducer.isLoading,
    repos: state.profileReducer.repos,
    loadingRepos: state.profileReducer.loadingRepos,
    followers: state.profileReducer.followers,
    loadindFollow: state.profileReducer.loadindFollow,
    modal: state.profileReducer.modal,
    selected: state.profileReducer.selected,
  }
}

export default connect(mapStateToProps, null)(Profile)