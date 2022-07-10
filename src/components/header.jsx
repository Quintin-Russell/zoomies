// /** @jsx jsx */
import React, { useState, useEffect, createContext } from 'react';
import { jsx, css } from '@emotion/react';

import style from '../style/style';
import layout from '../style/layout';

const headerContainer = [style.borderLight];
const ul = [layout.row, layout.alignC, layout.justSpbw, style.noListStyle];
const headerLogo = [layout.width50, style.pfDisp];

const Header = () => {
  return (
    <header css={headerContainer}>
      <h2 css={headerLogo}>Zoomies</h2>
      <ul css={ul}></ul>
    </header>
  );
};

export default Header;
