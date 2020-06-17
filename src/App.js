import React from 'react';
import Header from './components/Header.js';
import Selector from './components/Selector.js';
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
