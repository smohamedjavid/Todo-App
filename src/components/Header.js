import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Iconicon from 'react-native-vector-icons/Ionicons';

export default Header = (props) => {
    const { showAddTodo, openModal, screenName } = props

    return (
        <View style={props.style}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, paddingLeft: '5%', justifyContent: 'center' }}>
                    <Iconicon name={'md-menu'} size={25} color={'white'} />
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'bold', alignSelf: 'center', color: 'white', fontSize: 20 }}>
                        {screenName}
                    </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', paddingRight: '5%', }}>
                    {showAddTodo &&
                        <TouchableOpacity style={{ width: '50%', height: '60%', justifyContent: 'center' }} onPress={() => openModal(true)}>
                            <Iconicon style={{ alignSelf: 'center' }} name={'md-add-circle-outline'} size={25} color={'white'} />
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </View>
    )
}

