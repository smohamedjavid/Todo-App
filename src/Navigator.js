import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Iconicon from 'react-native-vector-icons/Ionicons';
import TodoScreen from './containers/TodoScreen';

const AllTodo = () => <TodoScreen showNewTodo={true} screen="All" />

const ActiveTodo = () => <TodoScreen showNewTodo={true} screen="Active" />

const CompletedTodo = () => <TodoScreen showNewTodo={false} screen="Completed" />

export default createBottomTabNavigator({
  All: { screen: AllTodo },
  Active: { screen: ActiveTodo },
  Completed: { screen: CompletedTodo },
}, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'All') {
          iconName = `md-list`;
        } else if (routeName === 'Active') {
          iconName = `md-flag`;
        } else {
          iconName = `md-checkmark-circle`;
        }
        return <Iconicon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#01B4DD',
      inactiveTintColor: 'gray',
      keyboardHidesTabBar: true
    },
    tabBarPosition: 'bottom',
  }
);