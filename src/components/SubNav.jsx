import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

/**
 * Click Event
 */

const ClickContainer = keyframes`
  from {
    width: 280px;
  }
  to {
    width: 660px;
  }
`;

const ClickedContainer = keyframes`
  from {
    width: 660px;
  }
  to {
    width: 280px;
  }
`;

const revealContainer = keyframes`
  from {
    width: 0px;
  }
  to {
    width: 508px;
  }
`;

const Container = styled.div`
  z-index: 10;
  position: fixed;
  font-family: basic-sans, sans-serif;
  display: flex;
  justify-content: space-between;
  margin-top: 62px;
  right: 23px;
  height: 26px;
  background: #000000;
  border-radius: 40px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  font-weight: 400;
  border: none;
  color: white;

  &:hover {
    cursor: pointer;
  }

  // 조건부 렌더링
  ${(props) =>
    props.clicked
      ? css`
          animation: ${ClickContainer} 0.5s ease forwards;
        `
      : css`
          animation: ${ClickedContainer} 0.5s ease forwards;
        `}
`;

const Title = styled.span``;

const Mode = styled.div`
  background-color: #eeff28;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: #000000;
  height: 26px;
  border-radius: 40px;
  width: 6rem;
`;

const ModeList = styled(Mode)`
  background-color: white;
  align-items: center;
  justify-content: center;
  border: none;
  color: #000000;
  height: 26px;
  border-radius: 40px;
  width: 150px;
  &:hover {
    background-color: #eeff28;
  }
`;

const ModeSelector = styled(Mode)`
  display: flex;
  justify-content: space-between;
  color: black;
  background-color: white;
  animation: ${revealContainer} 0.5s ease forwards;
`;

const sections = [
  { id: 1, label: 'diverse' },
  { id: 2, label: 'colliding' },
  { id: 3, label: 'imperfect' },
];

function SubNav({ onChangeSection, onChangeSectionMode }) {
  const [clicked, setClicked] = useState(false);
  const [checkMouseEnter, setCheckMouseEnter] = useState(null);

  const handleClick = () => {
    clicked ? setClicked(false) : setClicked(true);
  };

  return (
    <Container onClick={handleClick} clicked={clicked}>
      <Title>exploring mode</Title>
      {clicked ? (
        <ModeSelector as="ul">
          {sections.map(({ id, label }) => (
            <ModeList
              key={id}
              onMouseEnter={(e) => {
                setCheckMouseEnter({ id, label });
                e.target.textContent = `→ ${label} Mode`;
              }}
              onMouseLeave={(e) => {
                e.target.textContent = label;
              }}
              onClick={() => {
                onChangeSection(id);
              }}
            >
              {label}
            </ModeList>
          ))}
        </ModeSelector>
      ) : (
        <Mode>&rarr; {sections[onChangeSectionMode - 1].label}</Mode>
      )}
    </Container>
  );
}
export default SubNav;
