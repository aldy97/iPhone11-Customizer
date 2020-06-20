import React from 'react';
import { connect } from 'react-redux';
import {
  TotalPriceWrapper,
  PriceSection,
  PriceDivider,
  AddToBagButton,
} from '../style';

function TotalPrice(props) {
  return (
    <TotalPriceWrapper>
      <PriceSection>
        ${props.Price}
        <PriceDivider />
      </PriceSection>
      <AddToBagButton>Add to bag </AddToBagButton>
    </TotalPriceWrapper>
  );
}

const mapState = (state) => {
  return {
    Price: state.getIn(['reducer', 'Price']),
  };
};

export default connect(mapState, null)(TotalPrice);
