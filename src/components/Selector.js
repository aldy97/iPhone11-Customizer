import React from 'react';
import Left from './Left';
import Right from './Right';
import { SelectorWrapper } from './style';
//iphone图片+配置选择
function Selector(props) {
  return (
    <SelectorWrapper>
      <Left />
      <Right />
    </SelectorWrapper>
  );
}

export default Selector;
