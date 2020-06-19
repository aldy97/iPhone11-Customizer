import React, { useState } from 'react';
import { ChooseModelWrapper, OptionWrapper, Divider } from '../style';
import { connect } from 'react-redux';

function ChooseModel(props) {
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
    <ChooseModelWrapper>
      <h1>Choose your model.</h1>
      <OptionWrapper
        className={isFirstSelected ? 'selected' : null}
        onClick={handleFirstClick}
      >
        <div className='left'>{props.ModelOptions[0].left}</div>
        <div className='right'>{props.ModelOptions[0].right}</div>
      </OptionWrapper>
      <OptionWrapper
        className={isSecondSelected ? 'selected' : null}
        onClick={handleSecondClick}
      >
        <div className='left'>{props.ModelOptions[1].left}</div>
        <div className='right'>{props.ModelOptions[1].right}</div>
      </OptionWrapper>
      <Divider />
    </ChooseModelWrapper>
  );
}

const mapState = (state) => {
  return { ModelOptions: state.getIn(['reducer', 'ModelOptions']) };
};

export default connect(mapState, null)(ChooseModel);
