import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';

import ContentContainer from './content-container';
import InfoBar from './info-bar';
import { BiChevronDownCircle, BiCaretDown } from 'react-icons/bi';

import style from '../style/style';
import layout from '../style/layout';

const boxContainer = [
  layout.col,
  //   layout.justSpbw,
  layout.alignC,
  layout.width80,
  layout.margin1rem,
  style.oxygen,
  style.boxBackground,
  style.borderLight,
  style.dropShaddow
];
// const boxHeader = [
//   layout.row,
//   layout.width100,
//   layout.justSpbw,
//   layout.alignC,
//   style.hover
// ];
// const boxTitle = [layout.headerPadding];

// const formatName = (name) => {
//   const seperateWord = {
//     bullterrier: 'Bull Terrier',
//     cattledog: 'Cattle Dog',
//     cotondetulear: 'Conton de Tulear',
//     germanshepherd: 'German Shepherd',
//     mexicanhairless: 'Mexican Hairless',
//     stbernard: 'St. Bernard'
//   };
//   if (name in seperateWord) return seperateWord[name];
//   const returnValue = name.split('');
//   const newFirstLetter = returnValue[0].toUpperCase();
//   returnValue[0] = newFirstLetter;
//   return returnValue.join('');
// };

// const renderIcon = (name, selected) => {
//   if (selected) return <BiChevronDownCircle css={[layout.dogImg]} />;
//   return <BiCaretDown css={[layout.dogImg]} />;
// };

const Box = (props) => {
  const [selected, setSelected] = useState(false);

  //   const handleClick = (event) => {
  //     setSelected(!selected);
  //   };

  return (
    <li css={selected ? [...boxContainer, style.fontBlack] : boxContainer}>
      <InfoBar
        data={props}
        selected={selected}
        setSelectedFunction={(val) => setSelected(val)}
      />
      {/* <div onClick={handleClick} css={boxHeader}>
        <h4 css={boxTitle}>{formatName(props.name)}</h4>
        <div css={[layout.row, layout.alignC]}>
          <p>Click to see more details!</p>
          {renderIcon(props.name, selected)}
        </div>
      </div> */}

      {selected && <ContentContainer selected={selected} data={props} />}
    </li>
  );
};

export default Box;
