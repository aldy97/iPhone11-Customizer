import React, { useState, useEffect } from 'react';
import LeftBottom from './LeftBottom';
import { LeftWrapper } from '../style';
import styled from 'styled-components';

function Left(props) {
  const ImgWrapper = styled.div`
    width: 443px;
    height: 485px;
    margin-top: 110px;
    img {
      width: 443px;
      height: 485px;
      object-fit: contain;
    }
  `;

  const imgList = [
    { name: '', url: require('../../static/pictures/default.jpeg'), id: 0 },
    { name: '', url: require('../../static/pictures/max.jpeg'), id: 1 },
    { name: '', url: require('../../static/pictures/max-gold.png'), id: 2 },
    { name: '', url: require('../../static/pictures/max-green.png'), id: 3 },
    { name: '', url: require('../../static/pictures/max-grey.png'), id: 4 },
    { name: '', url: require('../../static/pictures/max-silver.png'), id: 5 },
    { name: '', url: require('../../static/pictures/pro.jpeg'), id: 6 },
    { name: '', url: require('../../static/pictures/pro-gold.png'), id: 7 },
    {
      name: '',
      url: require('../../static/pictures/pro-green2019.png'),
      id: 8,
    },
    { name: '', url: require('../../static/pictures/pro-grey.png'), id: 9 },
    { name: '', url: require('../../static/pictures/pro-silver.png'), id: 10 },
  ];

  const { modelSelected, finishSelected } = props;

  const [index, setIndex] = useState(0);

  //根据model和颜色选择改变图片展示
  useEffect(() => {
    if (modelSelected === -1) {
      setIndex(0);
    } else if (finishSelected === -1) {
      setIndex(modelSelected === 0 ? 6 : 1);
    } else {
      if (finishSelected === 0) {
        setIndex(modelSelected === 0 ? 9 : 4);
      } else if (finishSelected === 1) {
        setIndex(modelSelected === 0 ? 10 : 5);
      } else if (finishSelected === 2) {
        setIndex(modelSelected === 0 ? 8 : 3);
      } else {
        setIndex(modelSelected === 0 ? 7 : 2);
      }
    }
  }, [modelSelected, finishSelected]);

  return (
    <LeftWrapper>
      <ImgWrapper>
        <img alt='' src={imgList[index].url}></img>
      </ImgWrapper>
      <LeftBottom />
    </LeftWrapper>
  );
}

export default Left;
