import React from 'react';
import { connect } from 'react-redux';
import { RightWrapper } from '../style';

function Right(props) {
  return (
    <RightWrapper>
      <h1 className='title'>{props.titleList[props.titleIndex]}</h1>
      <h2 className='sub-title'>{props.subtitle}</h2>
    </RightWrapper>
  );
}

const mapState = (state) => {
  return {
    titleList: state.getIn(['reducer', 'titleList']),
    titleIndex: state.getIn(['reducer', 'titleIndex']),
    subtitle: state.getIn(['reducer', 'subtitle']),
  };
};

const mapDispatch = () => {
  return;
};

export default connect(mapState, mapDispatch)(Right);
