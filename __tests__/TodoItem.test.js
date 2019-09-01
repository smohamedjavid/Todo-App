import { Text } from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import TodoItem from '../src/components/TodoItem';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

let [deleteTodo, updateTodo,] = new Array(1).fill(jest.fn());

function shallowSetup() {
    const props = {
        todo: { text: "Learn Spanish", completed: false },
        deleteTodo: deleteTodo,
        updateTodo: updateTodo
    }
    const enzymeWrapper = shallow(<TodoItem {...props} />);

    return {
        props,
        enzymeWrapper
    };
}

describe('Shallow rendered Header', () => {
    const { enzymeWrapper, props } = shallowSetup();

    it('should Header with current screen name', () => {
        expect(enzymeWrapper.containsMatchingElement(<Text style={{ textAlign: 'left', fontSize: 16, fontFamily: 'Roboto-Medium', textDecorationLine: props.todo.completed ? 'line-through' : 'none' }}>
            {props.todo.text}
        </Text>)).toBe(true);
    });

    it('renders correctly', () => {
        renderer.create(<TodoItem {...props} />);
    });

});


