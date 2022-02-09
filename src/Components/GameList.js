import React from "react";
import styled from "styled-components";
import Game from "./Game";
import Loading from "./Loading";
import { getUniqueValues } from "../helpers";
import { useFilterContext } from "../Context/filter-context";
import { useGlobalContext } from "../Context/context";
const GameList = () => {
  const { filtered_games: games } = useFilterContext();
  const { isLoading } = useGlobalContext();
  const uniqueGenre = getUniqueValues(games, "genre");

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <div className="game-container">
        {games.map((game) => {
          return <Game key={game.id} {...game} uniqueGenre={uniqueGenre} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 175px;
  }
  .game-container {
    display: grid;
    gap: 2rem 1.5rem;
  }
  @media (min-width: 992px) {
    .game-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1170px) {
    .game-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GameList;
