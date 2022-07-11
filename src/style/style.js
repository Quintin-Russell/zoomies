import { css } from '@emotion/react';

export default {
  //fonts
  pfDisp: css`
    font-family: 'Playfair Display', serif;
  `,
  oxygen: css`
    font-family: 'Oxygen', sans-serif;
  `,
  fontBlack: css`
    color: black;
  `,
  bold: css`
    font-weight: bold;
  `,
  fontSize1rem: css`
    font-size: 1rem;
  `,
  fontSize2rem: css`
    font-size: 2rem;
  `,

  //list styling
  noListStyle: css`
    list-style: none;
  `,

  //borders
  border: css`
    border: 0.1rem solid black;
  `,

  borderLight: css`
    border: 0.05rem solid black;
  `,

  borderSection: css`
    border-bottom: 0.1rem solid black;
    border-top: 0.1rem solid black;
  `,

  //backgrounds
  headerBackground: css`
    background-color: #898aa6;
  `,
  boxBackground: css`
    background-color: #c9bbcf;
  `,
  contentBackground: css`
    background-color: white;
  `,

  //custom
  dropShaddow: css`
    filter: drop-shadow(0 0.25rem 0.25rem rgb(0 0 0 / 40%)); ;
  `,
  footerText: css`
    text-decoration: none;
    color: white;
    padding: 0.5rem;
  `,

  //cursor
  hover: css`
    :hover {
      cursor: pointer;
    }
  `
};
