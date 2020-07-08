import React, { useState } from 'react';
import TradeIn from './TradeIn';
import ChooseModel from './ChooseModel';
import ChooseFinish from './ChooseFinish';
import ChooseCapacity from './ChooseCapacity';
import AppleCare from './AppleCare';
import TotalPrice from './TotalPrice';
import { connect } from 'react-redux';
import { RightWrapper } from '../style';

function Right(props) {
  //配置选项必须按照一下顺序来实现：倘如前一项没有选择，之后的一项无法被选择，且为灰色。
  const [tradeInSelected, setTradeIn] = useState(false);
  const [modelSelected, setModel] = useState(false);
  const [finishSelected, setFinish] = useState(false);
  const [capacitySelected, setCapacity] = useState(false);
  const [AcSelected, setAc] = useState(false);

  return (
    <RightWrapper>
      <h1 className='title'>{props.titleList[props.titleIndex]}</h1>
      <h2 className='sub-title'>{props.subtitle}</h2>
      <TradeIn setTradeIn={setTradeIn} />
      <ChooseModel tradeInSelected={tradeInSelected} setModel={setModel} />
      <ChooseFinish modelSelected={modelSelected} setFinish={setFinish} />
      <ChooseCapacity
        finishSelected={finishSelected}
        setCapacity={setCapacity}
      />
      <AppleCare capacitySelected={capacitySelected} setAc={setAc} />
      <TotalPrice />
    </RightWrapper>
  );
}

const mapState = (state) => {
  return {
    titleList: state.getIn(['reducer', 'titleList']),
    titleIndex: state.getIn(['reducer', 'titleIndex']),
    subtitle: state.getIn(['reducer', 'subtitle']),
  };
};

const mapDispatch = () => {
  return;
};

export default connect(mapState, mapDispatch)(Right);
