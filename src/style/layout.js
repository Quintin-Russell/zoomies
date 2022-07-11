import { css } from '@emotion/react';

export default {
  //flex-direction
  col: css`
    display: flex;
    flex-direction: column;
  `,
  row: css`
    display: flex;
    flex-direction: row;
  `,

  //justify/align controls
  alignC: css`
    align-items: center;
  `,

  justSpbw: css`
    justify-content: space-between;
  `,

  justCent: css`
    justify-content: center;
  `,

  textAlignC: css`
    text-align: center;
  `,

  //width
  width10: css`
    width: 10%;
  `,

  width50: css`
    width: 50%;
  `,

  width80: css`
    width: 80%;
  `,

  width100: css`
    width: 100%;
  `,

  //padding

  padding0: css`
    padding: 0;
  `,

  padding25: css`
    padding: 0 0.25rem;
  `,

  padding1rem: css`
    padding: 1rem;
  `,

  bottomPadding: css`
    padding-bottom: 1rem;
  `,

  headerPadding: css`
    padding: 0 1rem;
  `,

  //margin
  margin0: css`
    margin: 0;
  `,

  marginHalfRem: css`
    margin: 0.5rem;
  `,

  margin1rem: css`
    margin: 1rem;
  `,

  bottomMargin: css`
    margin-bottom: 1rem;
  `,

  leftMargin25: css`
    padding-left: 0.25rem;
  `,

  //img
  dogImg: css`
    height: 2rem;
    padding: 0 0.5rem;
  `,
  breedImg: css`
    max-width: 85%;
  `
};
