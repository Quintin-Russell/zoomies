import React from 'react';
import { css, jsx } from '@emotion/react';

import style from '../style/style';
import layout from '../style/layout';

import dogIcon from '../images/dog-icon.png';

//style arrays
const headerContainer = [
  layout.row,
  layout.justSpbw,
  layout.alignC,
  style.dropShaddow,
  style.border,
  style.headerBackground
];
const headerLogo = [
  layout.row,
  layout.width50,
  layout.headerPadding,
  style.pfDisp,
  layout.alignC
];
const dogImg = [layout.dogImg];
//----------------------------------

const Header = () => {
  return (
    <header css={headerContainer}>
      <div css={headerLogo}>
        <img css={dogImg} src={dogIcon} alt="Zoomies-icon" />
        <h2>Zoomies</h2>
      </div>
    </header>
  );
};

export default Header;
