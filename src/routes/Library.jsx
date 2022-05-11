import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';
import { book } from '../book-list.json';

const Title = styled.h1`
  font-size: 9rem;
  font-family: basic-sans, sans-serif;
  font-weight: 700;
`;

const TitleContainer = styled.div`
  margin-top: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Library() {
  return (
    <>
      <Nav></Nav>
      <TitleContainer>
        <Title>discover a book!</Title>
      </TitleContainer>
    </>
  );
}

export default Library;
