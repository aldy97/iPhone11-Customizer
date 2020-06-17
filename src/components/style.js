import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 44px;
  background: #333333;
`;

export const NavigationWrapper = styled.div`
  height: 44px;
  width: 880px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

export const ItemWrapper = styled.div`
  height: 44px;
  font-size: 14px;
  font-weight: 400;
  flex: 1;
  cursor: pointer;
  line-height: 44px;
  text-align: center;
  color: #f5f5f7;
  opacity: 0.8;
  &: hover {
    opacity: 1;
  }
`;
