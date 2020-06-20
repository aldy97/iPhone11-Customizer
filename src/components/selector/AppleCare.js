import React, { useState } from 'react';
import { SectionWrapper, OptionWrapper, Divider } from '../style';
import { connect } from 'react-redux';

function AppleCare(props) {
  const [options, setOptions] = useState([false, false]);
  return (
    <SectionWrapper>
      <h1>{props.AppleCareTitle}</h1>
      <h2 style={{ 'text-decoration': 'none', cursor: 'auto' }}>
        {props.AppleCareDesc}
      </h2>
      {props.AppleCareList.map((item, index) => {
        return (
          <OptionWrapper
            key={index}
            className={options[index] ? 'selected' : null}
            onClick={() => {
              const list = [false, false];
              list[index] = true;
              setOptions(list);
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
  return {
    AppleCareList: state.getIn(['reducer', 'AppleCareList']),
    AppleCareTitle: state.getIn(['reducer', 'AppleCareTitle']),
    AppleCareDesc: state.getIn(['reducer', 'AppleCareDesc']),
  };
};

export default connect(mapState, null)(AppleCare);
