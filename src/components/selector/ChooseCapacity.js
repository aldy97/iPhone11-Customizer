import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ChooseCapacityWrapper, CapOptionWrapper } from '../style';

function ChooseCapacity(props) {
  const [capList, setCapList] = useState([false, false, false]);
  return (
    <ChooseCapacityWrapper>
      <h1>Choose your capacity.</h1>
      {props.CapacityList.map((item, index) => {
        return (
          <CapOptionWrapper
            className={capList[index] ? 'selected' : null}
            key={index}
            onClick={() => {
              const list = [false, false, false, false];
              list[index] = true;
              setCapList(list);
            }}
          >
            <div className='cap'>{item.cap}</div>
            <div className='text'>{item.text[props.ModelSelected]}</div>
          </CapOptionWrapper>
        );
      })}
    </ChooseCapacityWrapper>
  );
}

const mapState = (state) => {
  return {
    CapacityList: state.getIn(['reducer', 'CapacityList']),
    ModelSelected: state.getIn(['reducer', 'ModelSelected']),
  };
};

const mapDispatch = () => {
  return;
};

export default connect(mapState, mapDispatch)(ChooseCapacity);
