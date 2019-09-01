import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Navigator from './src/Navigator';

import { createAppContainer } from 'react-navigation';


export default App = () => {
  const AppContainer = createAppContainer(Navigator);
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}
