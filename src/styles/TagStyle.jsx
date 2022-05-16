import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 160px;
  height: 60px;
  border: 1px solid black;
  padding: 15px 35px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 400;
  transform: rotate(${(props) => props.rotate}+ 'deg');

  /* hover action 이 true일 때 hover action 동작하도록 설정 */
  ${(props) =>
    props.hoveraction
      ? css`
          &:hover {
            background-color: #eeff28;
          }
        `
      : null}
`;

const Title = styled.h1``;

export default function TagStyle({ tag, styleRotation, isHoverAction }) {
  return (
    <Container rotate={styleRotation} hoveraction={isHoverAction}>
      <Title>{tag ? tag : 'museum'}</Title>
    </Container>
  );
}
