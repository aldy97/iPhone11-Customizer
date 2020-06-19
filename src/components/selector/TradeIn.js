import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TradeInWrapper, OptionWrapper, Divider } from '../style';

//选择是否tradeIn的区块
function TradeIn(props) {
  const [isFirstSelected, setFirstSelected] = useState(false);
  const [isSecondSelected, setSecondSelected] = useState(false);
  const handleFirstClick = () => {
    if (!isFirstSelected) {
      setFirstSelected(true);
      setSecondSelected(false);
    }
  };
  const handleSecondClick = () => {
    if (!isSecondSelected) {
      setSecondSelected(true);
      setFirstSelected(false);
    }
  };
  return (
    <TradeInWrapper>
      <h1>Do you have an iPhone to trade in?</h1>
      <h2>See how Apple Trade In works</h2>
      <OptionWrapper
        className={isFirstSelected ? 'selected' : null}
        onClick={handleFirstClick}
      >
        <div className='left'>{props.TradeInOptions[0].left}</div>
        <div className='right'>{props.TradeInOptions[0].right}</div>
      </OptionWrapper>
      <OptionWrapper
        className={isSecondSelected ? 'selected' : null}
        onClick={handleSecondClick}
      >
        <div className='left'>{props.TradeInOptions[1].left}</div>
        <div className='right'>{props.TradeInOptions[1].right}</div>
      </OptionWrapper>
      <Divider />
    </TradeInWrapper>
  );
}

const mapState = (state) => {
  return {
    TradeInOptions: state.getIn(['reducer', 'TradeInOptions']),
  };
};

const mapDispatch = () => {
  return;
};

export default connect(mapState, mapDispatch)(TradeIn);
