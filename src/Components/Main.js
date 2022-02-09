import React from "react";
import GameList from "./GameList";
import Filter from "./Filter";
import styled from "styled-components";

const Main = () => {
  return (
    <MainCotainer>
      <div className="section-center games">
        <Filter />
        <GameList />
      </div>
    </MainCotainer>
  );
};

const MainCotainer = styled.div`
  .games {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media screen and (min-width: 992px) {
    .games {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default Main;
