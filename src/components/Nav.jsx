import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Container = styled.div`
  z-index: 10;
  padding: 0px 20px 0px 20px;
  width: 100%;
  height: 48px;
  display: flex;
  border-bottom: 1px solid #000000;
  font-family: ${(props) => props.font};
  align-items: center;
  justify-content: space-between;
  background-color: #f7f7f7;
  position: fixed;
`;

/**
 * Main Title
 */

const MainTitle = styled(Link)`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.fontsize};
  font-weight: 900;
  font-style: italic;
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
  text-align: ${(props) => (props.yourFindsTextAlign ? props.yourFindsTextAlign : 'center')};
  font-weight: 400;
  font-size: ${(props) => props.fontsize};
  width: ${(props) => props.activebottomborder};

  &:hover {
    border-bottom: 1px solid black;
    font-style: italic;
  }
`;

const ClickedContent = styled(Content)`
  border-bottom: 1px solid black;
  font-style: italic;
  text-align: ${(props) => (props.yourFindsTextAlign ? props.yourFindsTextAlign : 'center')};
`;

function Nav() {
  //styled-components 변수 선언
  const font = 'basic-sans, sans-serif';
  const fontsize = '17px';
  const activebottomborder = '8rem';
  const yourfindstextalign = 'end';

  const { pathname } = useLocation();
  return (
    <Container font={font}>
      {pathname === '/' ? (
        <MainTitle as="p">Hidden Book Finder</MainTitle>
      ) : (
        <MovedMainTitle to={'/'}>Hidden Book Finder</MovedMainTitle>
      )}

      <ContentsContainer fontsize={fontsize}>
        {pathname === '/random-stack' ? (
          <ClickedContent as="p" activebottomborder={activebottomborder}>
            random-stack
          </ClickedContent>
        ) : (
          <Content to={`/random-stack`} activebottomborder={activebottomborder}>
            random-stack
          </Content>
        )}
        {pathname === '/search' ? (
          <ClickedContent as="p" activebottomborder={activebottomborder}>
            search
          </ClickedContent>
        ) : (
          <Content to={`/search`} activebottomborder={activebottomborder}>
            search
          </Content>
        )}
        {pathname === '/book-shelf' ? (
          <ClickedContent as="p" activebottomborder={activebottomborder}>
            book-shelf
          </ClickedContent>
        ) : (
          <Content to={`/book-shelf`} activebottomborder={activebottomborder}>
            book-shelf
          </Content>
        )}

        {pathname === '/book' ? (
          <ClickedContent as="p" activebottomborder={activebottomborder}>
            book
          </ClickedContent>
        ) : (
          <Content to={`/book`} activebottomborder={activebottomborder}>
            book
          </Content>
        )}
      </ContentsContainer>

      {pathname === '/your-finds' ? (
        <ClickedContent as="p" activebottomborder={activebottomborder} yourfindstextalign={yourfindstextalign}>
          your-finds
        </ClickedContent>
      ) : (
        <Content to={`/your-finds`} activebottomborder={activebottomborder} yourfindstextalign={yourfindstextalign}>
          your-finds
        </Content>
      )}
    </Container>
  );
}

export default Nav;
