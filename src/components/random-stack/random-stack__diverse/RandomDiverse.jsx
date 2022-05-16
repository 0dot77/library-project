import React from 'react';
import styled from 'styled-components';
import { SectionDefaultStyle, randomColorPicker } from '../../../styles/sectionDefaultStyle.js';
import BookStyle from '../../../styles/BookStyle';
import TagStyle from '../../../styles/TagStyle';
import books from '../../../db/book-list.json';

// 가로 스크롤 인터렉션
const Container = styled(SectionDefaultStyle)`
  width: 6500px;
  height: 100vh;
  /* overflow-y: hidden; */
`;

/**
 * ? 각각의 오브젝트를 컴포넌트화해서 다룰 것인지, 아니면 스타일만 지정해서 다룰 것인지
 */

function RandomDiverse() {
  return (
    <Container>
      {books.map((book, index) => (
        <BookStyle
          key={index}
          color={randomColorPicker[Math.floor(Math.random() * randomColorPicker.length)]}
          title={book.title}
          author={book.author}
          year={book.year}
          press={book.press}
          randompos={true}
        />
      ))}
      <TagStyle />
    </Container>
  );
}

export default RandomDiverse;
