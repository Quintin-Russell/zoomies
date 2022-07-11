import React, { useState } from 'react';
import { jsx, css } from '@emotion/react';

import { RiFocusFill, RiCheckboxBlankCircleLine } from 'react-icons/ri';

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight
} from 'react-icons/md';

import style from '../style/style';
import layout from '../style/layout';

const cont = [layout.row, layout.justCent, layout.alignC];
const arrow = [layout.row, layout.justCent, style.fontSize2rem, style.hover];
const dots = [style.hover, style.fontSize1rem];

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
      <div
        css={[
          layout.flex,
          layout.row,
          layout.alignC,
          layout.justSpbw,
          layout.width85,
          layout.padding1rem
        ]}
      >
        <div css={arrow} onClick={() => prevImg()}>
          <MdOutlineKeyboardArrowLeft />
        </div>

        <div css={[...cont, layout.col]}>
          <div css={cont}>
            <img
              css={[layout.breedImg]}
              src={props.urlArray[currentImg]}
              alt="dog-image"
            />
          </div>
        </div>

        <div css={arrow} onClick={() => nextImg()}>
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
    </>
  );
}
