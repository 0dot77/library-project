import React from 'react';
import images from '../../../db/images.json';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding-top: 48px;
  .block-0:hover d {
    background-color: red;
  }
`;

function RandomColliding() {
  return (
    <Container>
      {images.map((img, index) => (
        <object type="image/svg+xml" data={img.url} className={`block-${index}`}></object>
      ))}
    </Container>
  );
}

export default RandomColliding;
