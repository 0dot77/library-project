import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
  height: 48px;
  display: flex;
  border-bottom: 1px solid #000000;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 20px;
`;

function Nav() {
  return (
    <Container>
      <Title>Hidden Book Finder</Title>
      <a>random-stack</a>
      <a>search</a>
      <a>book-shelf</a>
      <a>book</a>
      <a>your finds</a>
    </Container>
  );
}

export default Nav;
