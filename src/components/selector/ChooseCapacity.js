import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleChooseCap } from '../store/actionCreators';
import { SectionWrapper, SmallOptionWrapper, Divider2 } from '../style';

function ChooseCapacity(props) {
  const [capList, setCapList] = useState([false, false, false]);
  return (
    <SectionWrapper>
      <h1>Choose your capacity.</h1>
      {props.CapacityList.map((item, index) => {
        return (
          <SmallOptionWrapper
            className={capList[index] ? 'selected' : null}
            key={index}
            onClick={() => {
              const list = [false, false, false, false];
              list[index] = true;
              setCapList(list);
              props.chooseCap(index);
            }}
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
