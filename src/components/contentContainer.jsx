import React from 'react';
import { css, jsx } from '@emotion/react';

import style from '../style/style';
import layout from '../style/layout';

const contentContainer = [
  layout.col,
  layout.justCent,
  layout.alignC,
  layout.width100,
  style.contentBackground
];

const ContentContainer = (props) => {
  return (
    <div css={contentContainer}>
      {props.data && <p css={[style.fontBlack]}>{props.data.name}</p>}
    </div>
  );
};

export default ContentContainer;
