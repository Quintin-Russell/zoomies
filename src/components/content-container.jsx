import React, { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/react';

import Carousel from './carousel';
import formatName from '../helper-functions/format-name';

import style from '../style/style';
import layout from '../style/layout';

//style arrays
const contentContainer = [
  layout.col,
  layout.justCent,
  layout.alignC,
  layout.width100,
  style.contentBackground
];
const breedImg = [layout.margin1rem, layout.breedImg];
const subBreedContainer = [layout.col, layout.textAlignC, style.noListStyle];
//----------------------------------

const ContentContainer = (props) => {
  const [urlArray, setUrlArray] = useState([]);

  useEffect(() => {
    const imgFetch = async (name) => {
      const rawUrlArray = await fetch(`http://localhost:5000/image/${name}/`);
      const url = await rawUrlArray.json();
      setUrlArray(url['message']);
    };
    if (props.selected)
      imgFetch(props.data.name).catch((ERR) => console.log('ERROR:', ERR));
  }, []);

  return (
    <div css={contentContainer}>
      <div>
        {urlArray.length < 1 && <p>Loading...</p>}
        {
          urlArray.length > 0 && <Carousel urlArray={urlArray} />
          // <img css={breedImg} src={imgUrl[0]} alt={props.data.name} />
        }
        <div css={subBreedContainer}>
          {props.data.data.length > 0 && (
            <React.Fragment>
              <h5 css={[layout.margin0]}>Sub-Breeds</h5>
              <ul css={[layout.padding0, style.noListStyle]}>
                {props.data.data.map((subBreed) => (
                  <li key={subBreed} css={[layout.padding1rem]}>
                    {formatName(subBreed)}
                  </li>
                ))}
              </ul>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentContainer;
