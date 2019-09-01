import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, CheckBox, Modal, Button } from 'react-native';



export default NewTodo = (props) => {

    const [todoText, updateTodotext] = useState('')

    const [todoTextError, updateTodotextError] = useState(false)

    const { addTodo, closeModal, visible } = props

    const addNewTodo = () => {
        if (todoText !== "") {
            addTodo({
                text: todoText,
                completed: false
            })
            updateTodotext('')
            closeModal(false)
        } else {
            updateTodotextError(true)
        }
    }

    const updateTodoText = (value) => {
        if (value !== '') {
            updateTodotext(value)
            updateTodotextError(false)
        } else {
            updateTodotext(value)
            updateTodotextError(true)
        }
    }


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                closeModal(false);
            }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: 200, backgroundColor: 'white', marginTop: '20%', paddingTop: '5%', borderRadius: 15, borderColor: '#01B4DD', borderWidth: 0.6 }}>
                <Text style={{ color: '#01B4DD', fontSize: 20, justifyContent: 'center', alignContent: 'center', paddingTop: '5%', }}>Add Todo</Text>
                <TextInput
                    style={{ color: 'black', width: '80%', fontSize: 18, borderColor: todoTextError ? 'red' : '#01B4DD', borderWidth: 0.8, marginBottom: '3%', marginTop: '3%', borderRadius: 15, }}
                    underlineColorAndroid="transparent"
                    autoCorrect={false}
                    autoCapitalize='none'
                    placeholder="Type your todo here ..."
                    value={todoText}
                    onChangeText={(value) => updateTodoText(value)}
                />
                <View style={{ flexDirection: 'row', width: '50%', alignItems: 'center', }}>
                    <View style={{ marginRight: '10%', }}>
                        <Button
                            color={'#01B4DD'}
                            title="Add Todo"
                            onPress={() => addNewTodo()} />
                    </View>
                    <View style={{ marginLeft: '10%', }}>
                        <Button
                            color={'#01B4DD'}
                            title="Cancel"
                            onPress={() => closeModal(false)} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

