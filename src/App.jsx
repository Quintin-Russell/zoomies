import React, { useState, useEffect } from 'react';

import Header from './components/header';
import Footer from './components/footer';
import Box from './components/box';

import { BiSearchAlt } from 'react-icons/bi';

import style from './style/style';
import layout from './style/layout';

//style arrays
const ul = [
  layout.col,
  layout.alignC,
  layout.margin0,
  layout.padding0,
  style.noListStyle
];
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
  layout.col,
  layout.alignC,
  layout.textAlignC,
  style.contentBackground,
  style.borderSection,
  style.pfDisp
];
//----------------------------------

const App = () => {
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
  }, []);

  // Handler functions
  const handleSubmit = (event) => {
    event.preventDefault();
    let processedUserSearch = searchInput.replace(/[^a-z0-9]/gi, '');
    processedUserSearch = processedUserSearch.toLowerCase();
    if (processedUserSearch in dogDataMaster) {
      setUserSearchResult(processedUserSearch);
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
      {/* Search bar */}
      <form id={`breed-search-form`} onSubmit={handleSubmit} css={form}>
        <p css={searchTitle}>Search for a breed!</p>
        <div css={[layout.padding25]}>
          <input
            onChange={handleSearchChange}
            css={input}
            type="text"
            placeholder={searchInput}
          />
          <button
            onClick={handleSubmit}
            css={[layout.leftMargin25]}
            type="submit"
          >
            <BiSearchAlt css={searchIcon} />
          </button>
        </div>
        <p css={[layout.margin0, layout.textAlignC, style.fontBlack]}>
          Hit the search icon and we'll see if we can find the breed you are
          looking for.
        </p>
      </form>
      {/* Search results */}
      {userSearchResult && (
        <div css={[...sectionHeader, layout.bottomMargin]}>
          <h3 css={[style.fontBlack]}>Your Search Results:</h3>
          {userSearchResult === 'unsuccessful' && (
            <p css={[style.oxygen, style.fontBlack]}>
              We could not find the breed that you searched for. Please try
              again or feel free to browse the full list of breeds below!
            </p>
          )}
          {userSearchResult !== 'unsuccessful' && (
            <Box
              key={userSearchResult}
              name={userSearchResult}
              data={dogDataMaster[userSearchResult]}
            />
          )}
          <button
            css={[layout.margin1rem]}
            onClick={() => {
              document.querySelector('#breed-search-form').reset();
              setSearchInput('');
              setUserSearchResult(null);
            }}
          >
            Clear Search Results
          </button>
        </div>
      )}
      {/* All breed list */}
      <div css={[...sectionHeader, style.fontBlack]}>
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
      <Footer />
    </React.Fragment>
  );
};

export default App;
