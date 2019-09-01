import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import { TodoScreen } from '../src/containers/TodoScreen';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

let [addTodo, deleteTodo, updateTodo] = new Array(3).fill(jest.fn());

function shallowSetup() {
  const props = {
    todos: [{ text: "Buy Groceries", completed: false }, { text: "Pay Netflix due", completed: true }],
    showNewTodo: true,
    screen: 'All',
    addTodo: addTodo,
    updateTodo: updateTodo,
    deleteTodo: deleteTodo
  }
  const enzymeWrapper = shallow(<TodoScreen {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('Shallow rendered Todo Screen', () => {
  it('renders correctly', () => {
    const { enzymeWrapper, props } = shallowSetup();
    renderer.create(<TodoScreen {...props} />);
  });
});

