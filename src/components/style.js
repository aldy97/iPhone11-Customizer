import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 44px;
  background: #333333;
`;

export const NavigationWrapper = styled.div`
  height: 44px;
  width: 980px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  .iconfont {
    font-size: 22px;
    cursor: pointer;
    text-algin: center;
    line-height: 44px;
    color: #f5f5f7;
    opacity: 0.8;
  }
  .iconfont: hover {
    opacity: 1;
  }
  .glass {
    margin-right: 40px;
  }
  .bag {
    font-size: 18px;
    line-height: 42px;
  }
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

export const SelectorWrapper = styled.div`
  width: 980px;
  height: 1000px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

export const LeftWrapper = styled.div`
  flex: 1;
`;
export const RightWrapper = styled.div`
  flex: 1;
  .title {
    margin-top: 70px;
    font-size: 40px;
    color: #111;
    font-weight: 500;
    font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
      Helvetica, Arial, sans-serif;
  }
  .sub-title {
    font-color: #333333;
    font-size: 21px;
    line-height: 1.38105;
    font-weight: 350;
    letter-spacing: 0.011em;
    font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
      Helvetica, Arial, sans-serif;
    display: block;
    margin-top: 3px;
  }
`;

export const Divider = styled.div`
  height: 1px;
`;
