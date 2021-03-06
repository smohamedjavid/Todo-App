import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../actions/types';

const initialState = {
    todos: [
        {
            id: 0,
            text: "Buy groceries",
            completed: false
        },
        {
            id: 1,
            text: "Netflix payment due",
            completed: false
        },
        {
            id: 2,
            text: "Invite Amy for birthday party",
            completed: true
        },
        {
            id: 3,
            text: "Build a tree house",
            completed: false
        }
    ]
}

export default todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODO:
            let todo = {
                id: state.todos.length,
                text: action.todo.text,
                completed: action.todo.completed
            }
            return {
                todos: [
                    ...state.todos,
                    todo
                ]
            };

        case UPDATE_TODO:
            let indexToUpdate = state.todos.findIndex((todo) => todo.id == action.todo.id);
            state.todos[indexToUpdate] = action.todo;
            return {
                todos: [...state.todos],
            }

        case DELETE_TODO:
            return {
                todos: state.todos.filter((todo) => todo.id !== action.todo.id)
            }

        default:
            return state;
    }
}