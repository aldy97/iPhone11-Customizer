import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleChooseCap } from '../store/actionCreators';
import { SectionWrapper, SmallOptionWrapper, Divider2 } from '../style';

function ChooseCapacity(props) {
  const [cureeIndex, setIndex] = useState(-1);
  const { finishSelected, setCapacity, chooseCap } = props;
  return (
    <SectionWrapper style={{ opacity: `${finishSelected ? 1 : 0.4}` }}>
      <h1>Choose your capacity.</h1>
      {props.CapacityList.map((item, index) => {
        return (
          <SmallOptionWrapper
            className={index === cureeIndex ? 'selected' : null}
            key={index}
            onClick={() => {
              if (finishSelected) {
                setIndex(index);
                setCapacity(true);
                chooseCap(index);
              }
            }}
            style={{ cursor: `${finishSelected ? '' : 'auto'}` }}
          >
            <div className='cap'>{item.cap}</div>
            <div className='capText'>{item.text[props.ModelSelected]}</div>
          </SmallOptionWrapper>
        );
      })}
      <Divider2 />
    </SectionWrapper>
  );
}

const mapState = (state) => {
  return {
    CapacityList: state.getIn(['reducer', 'CapacityList']),
    ModelSelected: state.getIn(['reducer', 'ModelSelected']),
  };
};

const mapDispatch = (dispatch) => ({
  chooseCap(index) {
    const action = handleChooseCap(index);
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(ChooseCapacity);
