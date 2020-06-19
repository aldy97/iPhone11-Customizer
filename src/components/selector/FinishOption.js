import React from 'react';
import { FinishOptionWrapper } from '../style';

//略小的长方形选项，用于颜色选择，居中的上下结构（上颜色，下文字）
function FinishOption(props) {
  return (
    <FinishOptionWrapper className={props.className}>
      <div className='content'>
        <img src={props.url} alt='' />
        <div className='text'>{props.text}</div>
      </div>
    </FinishOptionWrapper>
  );
}

export default FinishOption;
