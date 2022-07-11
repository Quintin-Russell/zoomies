import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';

import { BiChevronDownCircle, BiCaretDown } from 'react-icons/bi';
import formatName from '../helper-functions/format-name';

import style from '../style/style';
import layout from '../style/layout';

const barHeader = [
  layout.row,
  layout.width100,
  layout.justSpbw,
  layout.alignC,
  style.hover
];
const barTitle = [layout.headerPadding];

const InfoBar = (props) => {
  const handleClick = (event) => {
    props.setSelectedFunction(!props.selected);
  };

  const renderIcon = (name, selected) => {
    if (selected) return <BiChevronDownCircle css={[layout.dogImg]} />;
    return <BiCaretDown css={[layout.dogImg]} />;
  };

  return (
    <div onClick={handleClick} css={barHeader}>
      <h4 css={barTitle}>{formatName(props.data.name)}</h4>
      <div css={[layout.row, layout.alignC]}>
        <p>Click to see more details!</p>
        {renderIcon(props.data.name, props.selected)}
      </div>
    </div>
  );
};

export default InfoBar;
