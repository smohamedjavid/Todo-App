import React from 'react';
import { View, StyleSheet, Text, CheckBox, TouchableOpacity } from 'react-native';
import Iconicon from 'react-native-vector-icons/Ionicons';

export default TodoItem = (props) => {

    const { completed, text } = props.todo
    const { deleteTodo, updateTodo, todo } = props

    return (
        <View>
            <View style={{ flexDirection: 'row', height: 50 }}>
                <View style={{ flex: 0.4, paddingLeft: "4%", justifyContent: 'center' }}>
                    <CheckBox
                        style={{ color: '#01B4DD' }}
                        value={completed}
                        onValueChange={(value) => {
                            updateTodo({
                                ...todo,
                                completed: value
                            })
                        }} />
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'left', fontSize: 16, fontFamily: 'Roboto-Medium', textDecorationLine: completed ? 'line-through' : 'none' }}>
                        {text}
                    </Text>
                </View>
                <View style={{ fontWeight: 'bold', flex: 0.4, justifyContent: 'center', alignItems: 'flex-end', paddingRight: '5%', }}>
                    <TouchableOpacity style={{ width: '80%', justifyContent: 'center', height: '80%' }} onPress={() => deleteTodo(props.todo)}>
                        <Iconicon style={{ alignSelf: 'center' }} name={'md-trash'} size={25} color={'red'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


