import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: basic-sans, sans-serif;
  display: flex;
  justify-content: space-between;
  margin-top: 13px;
  margin-right: 23px;
  float: right;
  width: 280px;
  height: 26px;
  background: #000000;
  border-radius: 40px;
  color: white;
  padding-left: 20px;
  display: flex;
  align-items: center;
  font-weight: 400;

  &:hover {
    cursor: pointer;
  }
`;

const Name = styled.span``;

const Mode = styled.div`
  background-color: #eeff28;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #000000;
  height: 26px;
  border-radius: 40px;
  width: 6rem;
`;

function SubNav() {
  return (
    <Container onclick={{}}>
      <Name>exploring mode</Name>
      <Mode>&rarr; diverse</Mode>
    </Container>
  );
}
export default SubNav;
