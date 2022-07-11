import React from 'react';
import { css, jsx } from '@emotion/react';

import style from '../style/style';
import layout from '../style/layout';

const footerContainer = [
  layout.row,
  layout.justCent,
  layout.alignC,
  style.border,
  style.headerBackground
];

const footerLogo = [
  layout.row,
  layout.headerPadding,
  style.pfDisp,
  layout.alignC,
  style.weight300
];

const footerText = [style.pfDisp, style.bold, style.footerText, style.hover];
const dogImg = [layout.dogImg];

const QRstring = `<QuintinRussell />`;

const Footer = () => {
  return (
    <footer css={footerContainer}>
      <div css={footerLogo}>
        <a
          target="_blank"
          css={footerText}
          href="http://www.quintinrussell.us/"
        >
          Designed by {QRstring}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
