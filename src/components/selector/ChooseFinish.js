import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SectionWrapper, SmallOptionWrapper, Divider2 } from '../style';

//颜色选择区域
function ChooseFinish(props) {
  const [currIndex, setIndex] = useState(-1);
  const { modelSelected, setFinish } = props;

  return (
    <SectionWrapper style={{ opacity: `${modelSelected ? 1 : 0.4}` }}>
      <h1>Choose your finish.</h1>
      {props.FinishOptionList.map((item, index) => {
        return (
          <SmallOptionWrapper
            className={currIndex === index ? 'selected' : null}
            key={index}
            onClick={() => {
              if (modelSelected) {
                setIndex(index);
                setFinish(true);
              }
            }}
            style={{ cursor: `${modelSelected ? '' : 'auto'}` }}
          >
            <div className='content'>
              <img src={item.url} alt='' />
              <div className='text'>{item.text}</div>
            </div>
          </SmallOptionWrapper>
        );
      })}
      <Divider2 />
    </SectionWrapper>
  );
}

const mapState = (state) => {
  return {
    FinishOptionList: state.getIn(['reducer', 'FinishOptionList']),
  };
};

export default connect(mapState, null)(ChooseFinish);
