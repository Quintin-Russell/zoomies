import React, { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/react';

import formatName from '../helper-functions/format-name';

import style from '../style/style';
import layout from '../style/layout';

const contentContainer = [
  layout.col,
  layout.justCent,
  layout.alignC,
  layout.width100,
  style.contentBackground
];
const breedImg = [layout.margin1rem, layout.breedImg];

const ContentContainer = (props) => {
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    const imgFetch = async (name) => {
      const rawImgUrl = await fetch(`http://localhost:5000/image/${name}/`);
      const url = await rawImgUrl.json();
      setImgUrl(url['message']);
    };
    if (props.selected)
      imgFetch(props.data.name).catch((ERR) => console.log('ERROR:', ERR));
  }, []);
  console.log('props:', props);
  return (
    <div css={contentContainer}>
      <div>
        {!imgUrl && <p>Loading...</p>}
        {imgUrl && <img css={breedImg} src={imgUrl} alt={props.data.name} />}
        <div>
          {props.data.data.length > 0 && (
            <React.Fragment>
              <h5 css={[layout.margin0]}>Sub-Breeds</h5>
              <ul css={[layout.bottomPadding]}>
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
