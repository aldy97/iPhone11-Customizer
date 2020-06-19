import React, { useState } from 'react';
import { handleChooseModel } from '../store/actionCreators';
import { SectionWrapper, OptionWrapper, Divider } from '../style';
import { connect } from 'react-redux';

function ChooseModel(props) {
  const [modelList, setModelList] = useState([false, false]);
  return (
    <SectionWrapper>
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
              props.chooseModel(index);
            }}
          >
            <div className='left'>{item.left}</div>
            <div className='right'>{item.right}</div>
          </OptionWrapper>
        );
      })}

      <Divider />
    </SectionWrapper>
  );
}

const mapState = (state) => {
  return { ModelOptions: state.getIn(['reducer', 'ModelOptions']) };
};

const mapDispatch = (dispatch) => ({
  chooseModel(index) {
    const action = handleChooseModel(index);
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(ChooseModel);
