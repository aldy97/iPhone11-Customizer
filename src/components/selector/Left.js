import React, { useState, useEffect } from 'react';
import { LeftWrapper } from '../style';
import styled from 'styled-components';

function Left(props) {
  const ImgWrapper = styled.div`
    width: 342px;
    height: 480px;
    border: 1px solid black;
    margin-top: 110px;
    img {
      width: 342px;
      height: 480px;
      object-fit: contain;
    }
  `;

  const { modelSelected, finishSelected } = props;

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

  const [index, setIndex] = useState(0);

  useEffect(() => {});

  return (
    <LeftWrapper>
      <ImgWrapper>
        <img alt='' src={imgList[index].url}></img>
      </ImgWrapper>
    </LeftWrapper>
  );
}

export default Left;
