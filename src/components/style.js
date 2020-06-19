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
    flex: 1;
    text-align: center;
  }
  .iconfont: hover {
    opacity: 1;
  }
  .glass {
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

export const OptionWrapper = styled.div`
  border: 1px solid rgb(195, 195, 195);
  width: 442px;
  height: 83px;
  margin-bottom: 10px;
  display: flex;
  cursor: pointer;
  border-radius: 5px;
  div {
    flex: 1;
    line-height: 83px;
    font-size: 17px;
    color: #333;
  }
  .left {
    text-align: left;
    margin-left: 10px;
    font-weight: bold;
  }
  .right {
    text-align: right;
    margin-right: 10px;
  }
  &.selected {
    border: 1px solid #0070c9;
  }
`;

export const FinishOptionWrapper = styled(OptionWrapper)`
  width: 213.5px;
  height: 108px;
  display: inline-block;
  margin-right: 15px;
  margin-bottom: 18px;
  text-align: center;
  .content {
    line-height: 108px;
  }
  img {
    width: 32px;
    height: 32px;
  }
  .text {
    margin-top: -75px;
    font-size: 12px;
    font-weight: 400;
    font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica,
      Arial, sans-serif;
  }
`;

export const CapOptionWrapper = styled(FinishOptionWrapper)`
  .cap {
    font-size: 29px;
    font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
      Helvetica, Arial, sans-serif;
    font-weight: 400;
    letter-spacing: 0.007em;
  }
  .text {
    font-size: 12px;
    font-weight: 400;
    margin-top: -55px;
    letter-spacing: -0.01em;
    font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica,
      Arial, sans-serif;
  }
`;

export const Divider = styled.div`
  border: 1px solid rgb(195, 195, 195);
  width: 442px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TradeInWrapper = styled.div`
  margin-top: 84px;
  h1 {
    font-size: 17px;
    font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica,
      Arial, sans-serif;
    color: #111111;
    margin-top: 0;
  }
  h2 {
    background: transparent;
    border: 0;
    color: #0070c9;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  h2: hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ChooseModelWrapper = styled(TradeInWrapper)`
  margin-top: 0;
  h1 {
    font-weight: 400;
    margin-bottom: 10px;
  }
`;

export const ChooseFinishWrapper = styled(ChooseModelWrapper)``;

export const ChooseCapacityWrapper = styled(ChooseModelWrapper)``;
