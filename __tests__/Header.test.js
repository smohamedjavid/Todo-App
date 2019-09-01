import { View, Text, TouchableOpacity } from 'react-native';
import Iconicon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Header from '../src/components/Header';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

let [openModal] = new Array(1).fill(jest.fn());

function shallowSetup() {
  const props = {
    showNewTodo: true,
    screenName: 'All',
    openModal: openModal
  }
  const enzymeWrapper = shallow(<Header {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('Shallow rendered Header', () => {
  const { enzymeWrapper, props } = shallowSetup();

  it('should Header with current screen name', () => {
    expect(enzymeWrapper.containsMatchingElement(<Text style={{ fontWeight: 'bold', alignSelf: 'center', color: 'white', fontSize: 20 }}>
      {props.screenName}
    </Text>)).toBe(true);
    expect(enzymeWrapper.containsMatchingElement(<View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', paddingRight: '5%', }}>
      {props.showAddTodo &&
        <TouchableOpacity style={{ width: '50%', height: '60%', justifyContent: 'center' }} onPress={() => props.openModal(true)}>
          <Iconicon style={{ alignSelf: 'center' }} name={'md-add-circle-outline'} size={25} color={'white'} />
        </TouchableOpacity>
      }
    </View>)).toBe(true);
  });

  it('renders correctly', () => {
    renderer.create(<Header showAddTodo={false} screenName="All" openModal={jest.fn()} />);
  });

});


