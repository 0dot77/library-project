import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Container = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
  height: 48px;
  display: flex;
  border-bottom: 1px solid #000000;
  align-items: center;
  justify-content: space-between;
  background-color: #f7f7f7;

  a:first-child {
    font-weight: 900;

    &:hover {
      border-bottom: none;
      font-style: italic;
    }
  }
  a {
    text-align: center;
    font-family: basic-sans, sans-serif;
    font-weight: 400;
    font-size: 20px;
    width: 13rem;

    &:hover {
      border-bottom: 1px solid black;
      font-style: italic;
    }
  }
`;

const Title = styled.p`
  width: 13rem;
  text-align: center;
  font-family: basic-sans, sans-serif;
  font-weight: 900;
  font-style: italic;
  font-size: 20px;
`;

const ClickedSection = styled.p`
  border-bottom: 1px solid black;
  font-weight: 400;
  font-style: italic;
  font-family: basic-sans, sans-serif;
  font-size: 20px;
  width: 13rem;
  text-align: center;
`;

function Nav() {
  const { pathname } = useLocation();
  return (
    <Container>
      {pathname === "/" ? <Title>Hidden Book Finder</Title> : <Link to={`/`}>Hidden Book Finder</Link>}

      {pathname === "/random-stack" ? (
        <ClickedSection>random-stack</ClickedSection>
      ) : (
        <Link to={`/random-stack`}>random-stack</Link>
      )}

      <Link to={`/search`}>search</Link>
      <Link to={`/book-shelf`}>book-shelf</Link>
      <Link to={`/book`}>book</Link>
      <Link to={`/your-finds`}>your finds</Link>
    </Container>
  );
}

export default Nav;
