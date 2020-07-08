import React, { useState } from 'react';
import { handleChooseAC } from '../store/actionCreators';
import { SectionWrapper, OptionWrapper, Divider } from '../style';
import { connect } from 'react-redux';

function AppleCare(props) {
  const [currIndex, setIndex] = useState(-1);
  const { chooseAC, capacitySelected, setAc } = props;
  return (
    <SectionWrapper style={{ opacity: `${capacitySelected ? 1 : 0.4}` }}>
      <h1>{props.AppleCareTitle}</h1>
      <h2 style={{ 'text-decoration': 'none', cursor: 'auto' }}>
        {props.AppleCareDesc}
      </h2>
      {props.AppleCareList.map((item, index) => {
        return (
          <OptionWrapper
            key={index}
            className={index === currIndex ? 'selected' : null}
            onClick={() => {
              if (capacitySelected) {
                setIndex(index);
                setAc(true);
                chooseAC(index);
              }
            }}
            style={{ cursor: `${capacitySelected ? '' : 'auto'}` }}
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
  return {
    AppleCareList: state.getIn(['reducer', 'AppleCareList']),
    AppleCareTitle: state.getIn(['reducer', 'AppleCareTitle']),
    AppleCareDesc: state.getIn(['reducer', 'AppleCareDesc']),
  };
};

const mapDispatch = (dispatch) => ({
  chooseAC(index) {
    const action = handleChooseAC(index);
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(AppleCare);
