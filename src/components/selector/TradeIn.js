import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TradeInWrapper, OptionWrapper, Divider } from '../style';

//选择是否tradeIn的区块
function TradeIn(props) {
  const [tradeList, setTradeList] = useState([false, false]);
  return (
    <TradeInWrapper>
      <h1>Do you have an iPhone to trade in?</h1>
      <h2>See how Apple Trade In works</h2>
      {props.TradeInOptions.map((item, index) => {
        return (
          <OptionWrapper
            className={tradeList[index] ? 'selected' : null}
            onClick={() => {
              const list = [false, false];
              list[index] = true;
              setTradeList(list);
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

const mapDispatch = () => {
  return;
};

export default connect(mapState, mapDispatch)(TradeIn);
