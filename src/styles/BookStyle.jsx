import React from 'react';
import styled, { css } from 'styled-components';

const BookContainer = styled.div`
  z-index: 0;
  position: absolute;
  width: 222px;
  height: 294px;
  border: 1px solid black;
  display: grid;
  grid-template-columns: 5px 217px;
  background-color: ${(props) => props.color};
  color: black;
  left: ${(props) => props.randompos[0]}px;
  /* top: calc(48px + ${(props) => props.randompos[1]}vh); */
`;

const BookBorder = styled.div`
  border-right: 1px solid black;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const BookTitle = styled.div`
  width: 200px;
  height: 132px;
  margin: 12px 10px 0px 7px;
  font-family: 'Source Serif Pro';
  font-weight: 700;
  ${(props) =>
    props.titlesize
      ? css`
          font-size: 35px;
        `
      : css`
          font-size: 45px;
        `}
`;

const SubTitle = styled.div`
  width: 200px;
  height: 106px;
  margin: 0px 10px 0px 7px;
  font-family: 'Kite One', sans-serif;
  font-size: 30px;
`;

const FooterContainer = styled.div`
  height: 15px;
  margin: 10px 8px 11px 7px;
  font-family: 'Source Serif Pro';
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
`;

const Year = styled.span``;
const Press = styled.span``;

export default function BookStyle({ color, title, author, year, press, randompos }) {
  return (
    <BookContainer
      color={color ? color : '#9980FA'}
      randompos={randompos ? [Math.floor(Math.random() * 6000), Math.floor(Math.random() * 100)] : null}
    >
      <BookBorder />
      <ContentContainer>
        <BookTitle titlesize={title.length > 17 ? true : false}>{title ? title : 'What is Designer'}</BookTitle>
        <SubTitle>{author ? author : 'Norman Potter'}</SubTitle>
        <FooterContainer>
          <Year>{year ? year : '2000'}</Year>
          <Press>{press ? press : 'Turtleback Books'}</Press>
        </FooterContainer>
      </ContentContainer>
    </BookContainer>
  );
}
