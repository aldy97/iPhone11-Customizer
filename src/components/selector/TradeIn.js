import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TradeInWrapper, OptionWrapper, Divider } from '../style';

//选择是否tradeIn的区块
function TradeIn(props) {
  const [currIndex, setIndex] = useState(-1);
  const { setTradeIn } = props;
  return (
    <TradeInWrapper>
      <h1>Do you have an iPhone to trade in?</h1>
      <h2>See how Apple Trade In works</h2>
      {props.TradeInOptions.map((item, index) => {
        return (
          <OptionWrapper
            key={index}
            className={currIndex === index ? 'selected' : null}
            onClick={() => {
              setIndex(index);
              setTradeIn(true);
            }}
          >
            <div className='left'>{item.left}</div>
            <div className='right'>{item.right}</div>
          </OptionWrapper>
        );
      })}

      <Divider />
    </TradeInWrapper>
  );
}

const mapState = (state) => {
  return {
    TradeInOptions: state.getIn(['reducer', 'TradeInOptions']),
  };
};

export default connect(mapState, null)(TradeIn);
