import 'react-native-gesture-handler';
import React from 'react';
import MainNavigation from './src/navigation/navigation';
import { Provider } from 'react-redux';
import { store } from './src/stores';
import { enableScreens } from 'react-native-screens';
enableScreens()

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </>
  )
}

export default App;
