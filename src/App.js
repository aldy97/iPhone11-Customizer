import React from 'react';
import store from './store/index.js';
import Header from './components/header';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;
