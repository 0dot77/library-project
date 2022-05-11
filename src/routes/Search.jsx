import React, { useState } from 'react';
import Nav from '../components/Nav';
import SubNav from '../components/SubNav';
import SearchDiverse from '../components/search/SearchDiverse';
import SearchColliding from '../components/search/SearchColliding';
import SearchImperfect from '../components/search/SearchImperfect';

function Search() {
  const [section, setSection] = useState(1);
  return (
    <>
      <Nav></Nav>
      <SubNav onChangeSection={setSection} onChangeSectionMode={section} />
      {section === 1 ? <SearchDiverse /> : section === 2 ? <SearchColliding /> : <SearchImperfect />}
    </>
  );
}

export default Search;
