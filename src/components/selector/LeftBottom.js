import React from 'react';
import styled from 'styled-components';

function LeftBottom() {
  const StyledLeftBottom = styled.div`
    margin-top: 65px;
    margin-right: 70px;
    margin-left: 70px;
  `;

  const PickUpReturn = styled.div`
    display: flex;
    border-bottom: 1px solid rgb(195, 195, 195);
    padding-bottom: 30px;
    .pu {
      flex: 1;
      text-align: center;
      color: #333;
      i {
        font-size: 25px;
        display: block;
      }
    }
  `;

  const Contact = styled.div`
    margin-top: 25px;
    color: #333;
    text-align: center;
    i {
      font-size: 25px;
      margin-right: 10px;
      line-height: 45px;
    }
  `;

  return (
    <StyledLeftBottom>
      <PickUpReturn>
        <div className='pu'>
          <i className='iconfont icon-ego-box'></i>
          Free no-contact delivery
        </div>
        <div className='pu'>
          <i
            className='iconfont icon-tuihuo'
            style={{ fontSize: 20, marginBottom: 4 }}
          ></i>
          Free returns
        </div>
      </PickUpReturn>
      <Contact>
        <i className='iconfont icon-liaotian' />
        <div style={{ display: 'inline-block', fontSize: 10 }}>
          <div>Have questions about buying an iPhone?</div>
          <div
            style={{
              color: '#0070c9',
              cursor: 'pointer',
            }}
          >
            Chat with an iPhone Specialist
          </div>
        </div>
      </Contact>
    </StyledLeftBottom>
  );
}

export default LeftBottom;
