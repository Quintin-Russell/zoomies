import React from 'react';
import { css, jsx } from '@emotion/react';

import style from '../style/style';
import layout from '../style/layout';

import { BiSearchAlt } from 'react-icons/bi';
import dogIcon from '../images/dog-icon.png';

const headerContainer = [
  layout.row,
  layout.justSpbw,
  layout.alignC,
  style.dropShaddow,
  style.border,
  style.headerBackground
];
const form = [layout.col, layout.alignC, layout.headerPadding];
const headerLogo = [
  layout.row,
  layout.width50,
  layout.headerPadding,
  style.pfDisp,
  layout.alignC,
  style.weight300
];
const dogImg = [layout.dogImg];

const Header = () => {
  return (
    <header css={headerContainer}>
      <div css={headerLogo}>
        <img css={dogImg} src={dogIcon} alt="Zoomies-icon" />
        <h2>Zoomies</h2>
      </div>

      <form css={form}>
        <p css={[layout.margin0, layout.width100]}>Search for a breed!</p>
        <div>
          <input type="text" />
          <BiSearchAlt css={[layout.padding25]} />
        </div>
      </form>
    </header>
  );
};

export default Header;
