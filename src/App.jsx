import React, { useState, useEffect } from 'react';

import Header from './components/header';
import Box from './components/box';
import alphabeticBinarySearch from './helper-functions/alphabetic-binary-search';

import { BiSearchAlt } from 'react-icons/bi';

import style from './style/style';
import layout from './style/layout';

const ul = [layout.col, layout.margin0, layout.alignC, style.noListStyle];
const searchTitle = [
  layout.margin0,
  layout.width100,
  layout.marginHalfRem,
  layout.textAlignC,
  style.fontBlack
];
const searchIcon = [layout.padding25, style.fontBlack, style.hover];
const form = [
  layout.col,
  layout.alignC,
  layout.margin1rem,
  layout.headerPadding
];
const input = [style.hover];
const sectionHeader = [
  layout.textAlignC,
  style.contentBackground,
  style.borderSection,
  style.pfDisp,
  style.fontBlack
];

function App() {
  const [dogDataMaster, setDogDataMaster] = useState({ message: null });
  const [searchInput, setSearchInput] = useState('');
  const [userSearchResult, setUserSearchResult] = useState(null);

  useEffect(() => {
    const fetchAllDogData = async () => {
      const rawData = await fetch('http://localhost:5000/all/');
      const jsonData = await rawData.json();
      setDogDataMaster(jsonData.message);
    };
    fetchAllDogData().catch((ERR) => console.log('FETCH ERROR:', ERR));
    console.log(dogDataMaster);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let processedUserSearch = searchInput.replace(/[^a-z0-9]/gi, '');
    processedUserSearch = processedUserSearch.toLowerCase();
    if (alphabeticBinarySearch(processedUserSearch)) {
      const userSearchSuccessful =
        dogDataMaster[alphabeticBinarySearch(processedUserSearch)];
      setUserSearchResult(userSearchSuccessful);
    } else {
      setUserSearchResult('unsuccessful');
    }
    setSearchInput('');
  };
  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearchInput(searchValue);
  };

  return (
    <React.Fragment>
      <Header />
      <form onSubmit={handleSubmit} css={form}>
        <p css={searchTitle}>Search for a breed!</p>
        <div css={[layout.padding25]}>
          <input onChange={handleSearchChange} css={input} type="text" />
          <button css={[layout.leftMargin25]} type="submit">
            <BiSearchAlt css={searchIcon} />
          </button>
        </div>
        <p css={[layout.margin0, style.fontBlack]}>
          Hit the search icon and we'll see if we can find the breed you are
          looking for
        </p>
      </form>
      {userSearchResult && userSearchResult === 'unsuccessful' && (
        <div css={[...sectionHeader, layout.bottomMargin]}>
          <h3>Your Search Results:</h3>
          <p css={[style.oxygen]}>
            We could not find the breed that you searched for. Please try again
            or feel free to browse the full list of breeds below!
          </p>
          {/* add button here to clear element and browse all breeds */}
        </div>
      )}
      <div css={sectionHeader}>
        <h3>All Breeds</h3>
      </div>

      <ul css={ul}>
        {dogDataMaster &&
          Object.keys(dogDataMaster).map((dogBreed) => {
            return (
              <Box
                key={dogBreed}
                name={dogBreed}
                data={dogDataMaster[dogBreed]}
              />
            );
          })}
      </ul>
    </React.Fragment>
  );
}

export default App;
