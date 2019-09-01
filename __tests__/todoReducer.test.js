import reducer from '../store/reducers/todoReducer';
import * as types from '../store/actions/types';

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            [
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
            ])
    })

    it('should handle ADD_TODO', () => {
        expect(
            reducer({
                "todos": [{
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
                }]
            }, {
                    type: types.ADD_TODO,
                    todo: {
                        text: 'Invite Arvind',
                        completed: false
                    }
                })
        ).toEqual({
            "todos": [
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
                },
                {
                    id: 4,
                    text: 'Invite Arvind',
                    completed: false
                }
            ]
        })

        expect(
            reducer(
                undefined,
                {
                    type: types.ADD_TODO,
                    todo: {
                        text: 'invite Arvind',
                        completed: false
                    }
                }
            )
        ).toEqual({
            "todos": [
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
                },
                {
                    id: 4,
                    text: 'invite Arvind',
                    completed: false
                }
            ]
        })
    })
})