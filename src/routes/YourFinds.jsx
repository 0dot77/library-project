import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';

const FixContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Fix = styled.p`
  font-size: 500px;
`;

function YourFinds() {
  return (
    <>
      <Nav />
      <FixContainer>
        <Fix>⚒</Fix>
        <p>고치는 중</p>
      </FixContainer>
    </>
  );
}

export default YourFinds;
