import React, { useState } from 'react';
import Nav from '../components/Nav';
import SubNav from '../components/SubNav';
import BookDiverse from '../components/book/BookDiverse';
import BookColliding from '../components/book/BookColliding';
import BookImperfect from '../components/book/BookImperfect';

function RandomStack() {
  const [section, setSection] = useState(1);
  return (
    <>
      <Nav></Nav>
      <SubNav onChangeSection={setSection} onChangeSectionMode={section} />
      {section === 1 ? <BookDiverse /> : section === 2 ? <BookColliding /> : <BookImperfect />}
    </>
  );
}

export default RandomStack;
