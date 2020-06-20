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

//大长方形选项
export const OptionWrapper = styled.div`
  border: 1px solid rgb(195, 195, 195);
  width: 442px;
  height: 83px;
  margin-bottom: 10px;
  display: flex;
  cursor: pointer;
  border-radius: 5px;
  &: hover {
    border: 1px solid black;
  }
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

//小长方形选项
export const SmallOptionWrapper = styled(OptionWrapper)`
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
  .cap {
    font-size: 29px;
    font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
      Helvetica, Arial, sans-serif;
    font-weight: 400;
    letter-spacing: 0.007em;
  }
  .capText {
    font-size: 12px;
    font-weight: 400;
    margin-top: -55px;
    letter-spacing: -0.01em;
    font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica,
      Arial, sans-serif;
  }
`;

//Trade-in区块的容器
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

//基于TradeInWrapper实现其他区块的容器
export const SectionWrapper = styled(TradeInWrapper)`
  margin-top: 0;
  h1 {
    font-weight: 400;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 7px;
    color: #333333;
  }
`;

//用于选项是大长方形的配置区块
export const Divider = styled.div`
  border: 1px solid rgb(195, 195, 195);
  width: 442px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

//用于选项是小长方形的配置区块
export const Divider2 = styled(Divider)`
  margin-top: 2px;
`;

export const TotalPriceWrapper = styled.div`
  width: 442px;
  height: 200px;
  background: #fafafa;
`;

export const PriceSection = styled.div`
  height: 94px;
  padding-left: 25px;
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 0.004em;
  font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
    Helvetica, Arial, sans-serif;
  line-height: 94px;
`;

export const PriceDivider = styled(Divider)`
  width: 385px;
`;

export const AddToBagButton = styled.div`
  width: 333px;
  height: 43px;
  border: 1px solid #07c;
  text-align: center;
  line-height: 43px;
  margin-left: 25px;
  margin-top: 45px;
  background-color: #0070c9;
  background: linear-gradient(#42a1ec, #0070c9);
  color: #fff;
  font-size: 17px;
  cursor: pointer;
`;
