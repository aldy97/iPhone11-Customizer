import React from 'react';
import { connect } from 'react-redux';
import { HeaderWrapper, NavigationWrapper, ItemWrapper } from './style';

function Header(props) {
  return (
    <HeaderWrapper>
      <NavigationWrapper>
        {props.headerItemList.map((item) => {
          return <ItemWrapper className='itemwrapper'>{item}</ItemWrapper>;
        })}
      </NavigationWrapper>
    </HeaderWrapper>
  );
}

const mapState = (state) => {
  return {
    headerItemList: state.getIn(['reducer', 'headerItemList']),
  };
};

export default connect(mapState, null)(Header);
