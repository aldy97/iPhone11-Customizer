import React, { useState } from 'react';
import FinishOption from './FinishOption';
import { connect } from 'react-redux';
import { ChooseFinishWrapper } from '../style';

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
          <FinishOption
            className={optionList[index] ? 'selected' : null}
            url={item.url}
            text={item.text}
            key={index}
            onClick={handleOptionClick(index)}
          />
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
