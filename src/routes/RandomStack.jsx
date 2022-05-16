import React, { useState } from 'react';
import Nav from '../components/Nav';
import SubNav from '../components/SubNav';
import RandomDiverse from '../components/random-stack/random-stack__diverse/RandomDiverse';
import RandomColliding from '../components/random-stack/random-stack__colliding/RandomColliding';
import RandomImperfect from '../components/random-stack/random-stack__imperfect/RandomImperfect';

function RandomStack() {
  const [section, setSection] = useState(1);
  return (
    <>
      <Nav></Nav>
      <SubNav onChangeSection={setSection} onChangeSectionMode={section} />
      {section === 1 ? <RandomDiverse /> : section === 2 ? <RandomColliding /> : <RandomImperfect />}
    </>
  );
}

export default RandomStack;
