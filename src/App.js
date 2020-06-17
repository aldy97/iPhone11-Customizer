import React from 'react';
import store from './store/index.js';
import Header from './components/Header';
import Selector from './components/Selector';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { GlobalStyleFont } from './static/iconfont/iconfont';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Header />
        <Selector />
        <GlobalStyle />
        <GlobalStyleFont />
      </Provider>
    </div>
  );
}

export default App;
