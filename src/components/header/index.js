import React from 'react';
import { connect } from 'react-redux';
import { HeaderWrapper, NavigationWrapper, ItemWrapper } from '../style';

function Header(props) {
  return (
    <HeaderWrapper>
      <NavigationWrapper>
        <i className='iconfont logo'>&#xe60b;</i>
        {props.headerItemList.map((item) => {
          return <ItemWrapper>{item}</ItemWrapper>;
        })}
        <i className='iconfont glass'>&#xe682;</i>
        <i className='iconfont bag'>&#xe60c;</i>
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
