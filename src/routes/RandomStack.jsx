import React, { useState } from 'react';
import Nav from '../components/Nav';
import SubNav from '../components/SubNav';

function RandomStack() {
  const [section, setSection] = useState(1);
  return (
    <>
      <Nav></Nav>
      <SubNav onChangeSection={setSection} onChangeSectionMode={section} />
      {section === 1 ? <h1>diverse</h1> : section === 2 ? <h1>colliding</h1> : <h1>Imperfect</h1>}
    </>
  );
}

export default RandomStack;
