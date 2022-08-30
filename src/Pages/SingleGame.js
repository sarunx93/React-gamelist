import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Context/context";
import styled from "styled-components";
const SingleGame = ({ allGames }) => {
  const { title } = useParams();
  const [game, setGame] = useState({});
  const { games } = useGlobalContext();
  const selectedGame = games.find((game) => game.title === title);

  const fetchSingleGame = async () => {
    let url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${selectedGame.id}`;
    try {
      const resp = await fetch(url, {
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      });
      const data = await resp.json();
      setGame(data);
      console.log(game);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSingleGame();
  }, []);
  if (!selectedGame) return <h1>Loading...</h1>;
  return (
    <Wrapper>
      <div className="content-container">
        <div className="subcon-tainer">
          <div className="polaroid">
            <a href={selectedGame.game_url} target="_blank">
              <img src={selectedGame.thumbnail} className="game-img" />
            </a>
            <div className="text-container">
              <h2>{selectedGame.title}</h2>
            </div>
          </div>
          <h5>{`"${selectedGame.short_description}"`}</h5>
        </div>

        <div className="desc-container">
          <h5>Genre : {selectedGame.genre}</h5>
          <h5>Platform : {selectedGame.platform}</h5>
          <h5>Publisher : {selectedGame.publisher}</h5>
          <h5>Release Date : {selectedGame.release_date}</h5>
          <p>Developed by {selectedGame.developer}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;

  .content-container {
    margin: 0 auto;
    text-align: center;
    padding: 1rem;
    height: 76vh;
  }
  .game-img {
    width: 100%;
  }
  .polaroid {
    margin: 0 auto;
    width: 50%;
    background: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 0.5rem;
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 992px) {
    .polaroid {
      width: 50rem;
      padding-top: 1rem;
    }
    .game-img {
      width: 80%;
    }
    .content-container {
      display: grid;
      place-items: center;
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
    }
    .desc-container h5,
    p {
      font-size: 2rem;
    }
    .desc-container {
      text-align: left;
    }
  }
`;

export default SingleGame;
