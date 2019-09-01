import { Text } from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import NewTodo from '../src/components/NewTodo';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


let [addTodo, closeModal] = new Array(1).fill(jest.fn());

function shallowSetup() {
  const props = {
    addTodo: addTodo,
    closeModal: closeModal,
    visible: true
  }
  const enzymeWrapper = shallow(<NewTodo {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('Shallow rendered NewTodo Modal', () => {
  it('renders correctly', () => {
    const { enzymeWrapper, props } = shallowSetup();
    renderer.create(<NewTodo {...props} />);
  });
});


