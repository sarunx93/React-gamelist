import React from "react";
import styled from "styled-components";

const MyGamesButton = () => {
  return (
    <MyGamesContainer>
      <h4>My Games</h4>
    </MyGamesContainer>
  );
};

const MyGamesContainer = styled.button`
  margin: 0 0.75rem;
  background: transparent;
  border: transparent;
  font-size: 1.25rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  cursor: pointer;
  &:hover {
    color: blue;
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
export default MyGamesButton;
