import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';

import ContentContainer from './content-container';
import InfoBar from './info-bar';
import { BiChevronDownCircle, BiCaretDown } from 'react-icons/bi';

import style from '../style/style';
import layout from '../style/layout';

const boxContainer = [
  layout.col,
  layout.alignC,
  layout.width80,
  layout.margin1rem,
  style.oxygen,
  style.boxBackground,
  style.borderLight,
  style.dropShaddow
];

const Box = (props) => {
  const [selected, setSelected] = useState(false);

  return (
    <li css={selected ? [...boxContainer, style.fontBlack] : boxContainer}>
      <InfoBar
        data={props}
        selected={selected}
        setSelectedFunction={(val) => setSelected(val)}
      />
      {selected && <ContentContainer selected={selected} data={props} />}
    </li>
  );
};

export default Box;
