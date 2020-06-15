import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import ListExample from './components/ListExample';

function App() {
  return (
    <Provider store={store}>
      <ListExample />
    </Provider>
  );
}

export default App;
