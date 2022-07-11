import React from 'react';
import { css, jsx } from '@emotion/react';

import style from '../style/style';
import layout from '../style/layout';

// import { BiSearchAlt } from 'react-icons/bi';
import dogIcon from '../images/dog-icon.png';

const headerContainer = [
  layout.row,
  layout.justSpbw,
  layout.alignC,
  style.dropShaddow,
  style.border,
  style.headerBackground
];
// const form = [layout.col, layout.alignC, layout.headerPadding];
// const input = [style.hover];
const headerLogo = [
  layout.row,
  layout.width50,
  layout.headerPadding,
  style.pfDisp,
  layout.alignC
];
const dogImg = [layout.dogImg];

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
