import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './types';

export const addTodo = (todo) => dispatch => {
    dispatch({
        type: ADD_TODO,
        todo
    });
}

export const updateTodo = (todo) => dispatch => {
    dispatch({
        type: UPDATE_TODO,
        todo
    });
}

export const deleteTodo = (todo) => dispatch => {
    dispatch({
        type: DELETE_TODO,
        todo
    });
}