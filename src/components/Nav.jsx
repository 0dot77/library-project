import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Container = styled.div`
  padding: 0px 20px 0px 20px;
  width: 100%;
  height: 48px;
  display: flex;
  border-bottom: 1px solid #000000;
  font-family: ${(props) => props.font};
  align-items: center;
  justify-content: space-between;
  background-color: #f7f7f7;
`;

/**
 * Main Title
 */

const MainTitle = styled(Link)`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.fontSize};
  font-weight: 900;
`;

const MovedMainTitle = styled(MainTitle)`
  font-style: normal;
  font-weight: 700;
  &:hover {
    font-style: italic;
    font-weight: 900;
  }
`;

/**
 * Contents
 */

const ContentsContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;

const Content = styled(Link)`
  text-align: center;
  font-weight: 400;
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.activeBottomBorder};

  &:hover {
    border-bottom: 1px solid black;
    font-style: italic;
  }
`;

const ClickedContent = styled(Content)`
  border-bottom: 1px solid black;
  font-style: italic;
`;

function Nav() {
  //styled-components 변수 선언
  const font = 'basic-sans, sans-serif';
  const fontSize = '17px';
  const activeBottomBorder = '8rem';

  const { pathname } = useLocation();
  return (
    <Container font={font}>
      {pathname === '/' ? (
        <MainTitle as="p">Hidden Book Finder</MainTitle>
      ) : (
        <MovedMainTitle to={'/'}>Hidden Book Finder</MovedMainTitle>
      )}

      <ContentsContainer fontSize={fontSize}>
        {pathname === '/random-stack' ? (
          <ClickedContent as="p" activeBottomBorder={activeBottomBorder}>
            random-stack
          </ClickedContent>
        ) : (
          <Content to={`/random-stack`} activeBottomBorder={activeBottomBorder}>
            random-stack
          </Content>
        )}
        <Content to={`/search`} activeBottomBorder={activeBottomBorder}>
          search
        </Content>
        <Content to={`/book-shelf`} activeBottomBorder={activeBottomBorder}>
          book-shelf
        </Content>
        <Content to={`/book`} activeBottomBorder={activeBottomBorder}>
          book
        </Content>
      </ContentsContainer>

      <Content to={`/your-finds`} activeBottomBorder={activeBottomBorder}>
        your finds
      </Content>
    </Container>
  );
}

export default Nav;
