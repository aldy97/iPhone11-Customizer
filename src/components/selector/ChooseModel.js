import React, { useState } from 'react';
import { ChooseModelWrapper, OptionWrapper, Divider } from '../style';
import { connect } from 'react-redux';

function ChooseModel(props) {
  const [modelList, setModelList] = useState([false, false]);
  return (
    <ChooseModelWrapper>
      <h1>Choose your model.</h1>
      {props.ModelOptions.map((item, index) => {
        return (
          <OptionWrapper
            className={modelList[index] ? 'selected' : null}
            key={index}
            onClick={() => {
              const list = [false, false];
              list[index] = true;
              setModelList(list);
            }}
          >
            <div className='left'>{item.left}</div>
            <div className='right'>{item.right}</div>
          </OptionWrapper>
        );
      })}

      <Divider />
    </ChooseModelWrapper>
  );
}

const mapState = (state) => {
  return { ModelOptions: state.getIn(['reducer', 'ModelOptions']) };
};

export default connect(mapState, null)(ChooseModel);
