import React, { useState } from 'react';
import { handleChooseModel } from '../store/actionCreators';
import { SectionWrapper, OptionWrapper, Divider } from '../style';
import { connect } from 'react-redux';

function ChooseModel(props) {
  const { tradeInSelected, setModel, chooseModel } = props;
  const [currIndex, setIndex] = useState(-1);
  return (
    <SectionWrapper style={{ opacity: `${tradeInSelected ? 1 : 0.4}` }}>
      <h1>Choose your model.</h1>
      {props.ModelOptions.map((item, index) => {
        return (
          <OptionWrapper
            className={currIndex === index ? 'selected' : null}
            key={index}
            onClick={() => {
              if (tradeInSelected) {
                setIndex(index);
                setModel(index);
                chooseModel(index);
                console.log('model index:' + index);
              }
            }}
            style={{ cursor: `${tradeInSelected ? '' : 'auto'}` }}
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
