import React, { useState, useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect, useDispatch } from 'react-redux'
import { fetchImageSuccess } from '../stores/actions/item.action'
import styles from './Item.style'

type Props = {
    item: any;
    isLoading: boolean;
}

const Item = (props: Props) => {
    const dispatch = useDispatch()
    const onLoadEnd = () => {
        dispatch(fetchImageSuccess());
        console.log('end')
    }
    return (
        <View style={styles.tableBody}>
            {/* <Text>{item.id}</Text> */}
            <Image style={styles.avatar} source={{ uri: props.item.avatar_url }} resizeMode="contain"
                onLoadEnd={onLoadEnd}
            />
            <Text>{props.item.login}</Text>
        </View>
    )
}

const mapStateToProps = (state: any) => {
    return {
        isLoading: state.itemReducer.isLoading
    }
}

export default connect(mapStateToProps, null)(Item)