import React from 'react';
import Header from './components/header/index';
import Selector from './components/selector/index';
import store from './store/index.js';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { GlobalStyleFont } from './static/iconfont/iconfont';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Selector />
        <GlobalStyle />
        <GlobalStyleFont />
      </div>
    </Provider>
  );
}

export default App;
