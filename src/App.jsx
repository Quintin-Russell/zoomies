import React, { useState, useEffect } from 'react';

import Header from './components/header';
import Box from './components/box';

import style from './style/style';
import layout from './style/layout';

const ul = [layout.col, layout.alignC, style.noListStyle];

function App() {
  const [dogDataMaster, setDogDataMaster] = useState({ message: null });

  useEffect(() => {
    const fetchAllDogData = async () => {
      const rawData = await fetch('http://localhost:5000/all/');
      const jsonData = await rawData.json();
      setDogDataMaster(jsonData);
    };
    fetchAllDogData().catch((ERR) => console.log('FETCH ERROR:', ERR));
  }, []);

  return (
    <React.Fragment>
      <Header />
      <ul css={ul}>
        {dogDataMaster.message &&
          Object.keys(dogDataMaster.message).map((dogBreed) => {
            return (
              <Box
                key={dogBreed}
                name={dogBreed}
                data={dogDataMaster.message[dogBreed]}
              />
            );
          })}
      </ul>
    </React.Fragment>
  );
}

export default App;
