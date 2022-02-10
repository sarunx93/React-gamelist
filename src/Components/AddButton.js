import React from "react";
import styled from "styled-components";

const AddButton = (props) => {
  const { id, title, platform, thumbnail } = props;
  //post data to backend
  return (
    <MyGamesContainer onClick={() => console.log(title)}>
      <h5>Add to list</h5>
    </MyGamesContainer>
  );
};

const MyGamesContainer = styled.button`
  display: flex;
  justify-content: flex-end;
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
`;
export default AddButton;
