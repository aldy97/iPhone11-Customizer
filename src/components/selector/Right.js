import React from 'react';
import TradeIn from './TradeIn';
import ChooseModel from './ChooseModel';
import ChooseFinish from './ChooseFinish';
import ChooseCapacity from './ChooseCapacity';
import AppleCare from './AppleCare';
import TotalPrice from './TotalPrice';
import { connect } from 'react-redux';
import { RightWrapper } from '../style';

function Right(props) {
  const { titleList, titleIndex, subtitle } = props;
  const {
    tradeInSelected,
    modelSelected,
    finishSelected,
    capacitySelected,
    AcSelected,
    setTradeIn,
    setModel,
    setFinish,
    setCapacity,
    setAc,
  } = props;

  return (
    <RightWrapper>
      <h1 className='title'>{titleList[titleIndex]}</h1>
      <h2 className='sub-title'>{subtitle}</h2>
      <TradeIn setTradeIn={setTradeIn} />
      <ChooseModel tradeInSelected={tradeInSelected} setModel={setModel} />
      <ChooseFinish modelSelected={modelSelected} setFinish={setFinish} />
      <ChooseCapacity
        finishSelected={finishSelected}
        setCapacity={setCapacity}
      />
      <AppleCare capacitySelected={capacitySelected} setAc={setAc} />
      <TotalPrice AcSelected={AcSelected} />
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
