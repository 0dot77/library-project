import React, { useState } from 'react';
import Nav from '../components/Nav';
import SubNav from '../components/SubNav';
import BookShelfDiverse from '../components/book-shelf/BookShelfDiverse';
import BookShelfColliding from '../components/book-shelf/BookShelfColliding';
import BookShelfImperfect from '../components/book-shelf/BookShelfImperfect';

function RandomStack() {
  const [section, setSection] = useState(1);
  return (
    <>
      <Nav></Nav>
      <SubNav onChangeSection={setSection} onChangeSectionMode={section} />
      {section === 1 ? <BookShelfDiverse /> : section === 2 ? <BookShelfColliding /> : <BookShelfImperfect />}
    </>
  );
}

export default RandomStack;
