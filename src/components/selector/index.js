import React, { useState } from 'react';
import Left from './Left';
import Right from './Right';
import { SelectorWrapper } from '../style';
//iphone图片+配置选择
function Selector() {
  //配置选项必须按照一下顺序来实现：倘如前一项没有选择，之后的一项无法被选择，且为灰色。
  const [tradeInSelected, setTradeIn] = useState(false);
  const [modelSelected, setModel] = useState(-1);
  const [finishSelected, setFinish] = useState(-1);
  const [capacitySelected, setCapacity] = useState(false);
  const [AcSelected, setAc] = useState(false);

  return (
    <SelectorWrapper>
      <Left modelSelected={modelSelected} finishSelected={finishSelected} />
      <Right
        tradeInSelected={tradeInSelected}
        modelSelected={modelSelected}
        finishSelected={finishSelected}
        capacitySelected={capacitySelected}
        AcSelected={AcSelected}
        setTradeIn={setTradeIn}
        setModel={setModel}
        setFinish={setFinish}
        setCapacity={setCapacity}
        setAc={setAc}
      />
    </SelectorWrapper>
  );
}

export default Selector;
