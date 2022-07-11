import React, { useState } from 'react';
import { jsx, css } from '@emotion/react';

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight
} from 'react-icons/md';

import style from '../style/style';
import layout from '../style/layout';

//style arrays
const rowCentered = [layout.row, layout.alignC, layout.justSpbw];
const wholeContainer = [...rowCentered, layout.width85, layout.padding1rem];
const arrow = [...rowCentered, style.fontSize2rem, style.hover];
const dots = [style.hover, style.fontSize1rem];
//----------------------------------

export default function Carousel(props) {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = () => {
    if (currentImg === props.urlArray.length - 1) return setCurrentImg(0);
    const newState = currentImg + 1;
    setCurrentImg(newState);
  };

  const prevImg = () => {
    if (currentImg === 0) return setCurrentImg(props.urlArray - 1);
    const newState = currentImg - 1;
    setCurrentImg(newState);
  };

  return (
    <>
      <div css={wholeContainer}>
        <div css={arrow} onClick={() => prevImg()}>
          <MdOutlineKeyboardArrowLeft />
        </div>

        <div css={[...rowCentered, layout.col]}>
          <img
            css={[layout.breedImg]}
            src={props.urlArray[currentImg]}
            alt="dog-image"
          />
        </div>

        <div css={arrow} onClick={() => nextImg()}>
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
    </>
  );
}
