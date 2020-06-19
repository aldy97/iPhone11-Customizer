import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ChooseFinishWrapper, FinishOptionWrapper } from '../style';

function ChooseFinish(props) {
  const [optionList, setOptionList] = useState([false, false, false, false]);

  const handleOptionClick = (index) => {
    console.log(index);
  };

  return (
    <ChooseFinishWrapper>
      <h1>Choose your finish.</h1>
      {props.FinishOptionList.map((item, index) => {
        return (
          <FinishOptionWrapper
            className={optionList[index] ? 'selected' : null}
            key={index}
            onClick={handleOptionClick(index)}
          >
            <div className='content'>
              <img src={item.url} alt='' />
              <div className='text'>{item.text}</div>
            </div>
          </FinishOptionWrapper>
        );
      })}
    </ChooseFinishWrapper>
  );
}

const mapState = (state) => {
  return {
    FinishOptionList: state.getIn(['reducer', 'FinishOptionList']),
  };
};

export default connect(mapState, null)(ChooseFinish);
