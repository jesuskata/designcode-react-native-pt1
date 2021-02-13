// Dependencies
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

// Redux Store
import { appStore, persistor } from './src/store';

// Components
import { AppNavigatorContainer } from './src/navigator/AppNavigator';

const App = () => (
  <Provider store={appStore}>
    <PersistGate loading={null} persistor={persistor}>
      <AppNavigatorContainer />
    </PersistGate>
  </Provider>
);

export default App;
