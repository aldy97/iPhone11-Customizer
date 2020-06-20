import React from 'react';
import { connect } from 'react-redux';
import {
  TotalPriceWrapper,
  PriceSection,
  PriceDivider,
  AddToBagButton,
} from '../style';

//总价栏目，右侧最后的区块
function TotalPrice(props) {
  return (
    <TotalPriceWrapper>
      <PriceSection>
        <div className='price'>${props.Price}</div>
        <div className='AC'>
          {props.AppleCareIsSelected ? 'AppleCare+ included' : ''}
        </div>
        <PriceDivider />
      </PriceSection>
      <AddToBagButton>Add to bag</AddToBagButton>
    </TotalPriceWrapper>
  );
}

const mapState = (state) => {
  return {
    Price: state.getIn(['reducer', 'Price']),
    AppleCareIsSelected: state.getIn(['reducer', 'AppleCareIsSelected']),
  };
};

export default connect(mapState, null)(TotalPrice);
