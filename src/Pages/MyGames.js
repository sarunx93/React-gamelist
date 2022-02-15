import React, { useState, useEffect } from "react";
import { useMyGameContext } from "../Context/mygames_context";
import { FaTrash } from "react-icons/fa";
import styled from "styled-components";
const MyGames = () => {
  const { gameList } = useMyGameContext();

  const { removeGame } = useMyGameContext();

  return (
    <>
      <h1 className="title">My Favorite Games.</h1>
      <Wrapper>
        {gameList.map((game) => {
          return (
            <div className="container">
              <div className="content-container">
                <img src={game.thumbnail} alt="" />
              </div>
              <div className="text-container">
                <h3>{game.title}</h3>
              </div>

              <div className="btn-container">
                <button
                  type="button"
                  className="trash-btn"
                  onClick={() => removeGame(game.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          );
        })}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  padding: 1rem;
  text-align: center;
  align-items: center;

  .container {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    width: 70%;
    margin: 1rem auto;
    background: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .text-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem;
  }
  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title {
    margin: 1rem;
  }
  .trash-btn {
    font-size: 1.5rem;
    border: transparent;
    background: transparent;
    padding-right: 2rem;
    cursor: pointer;
  }
  .trash-btn:hover {
    color: red;
  }
  @media screen and (max-width: 992px) {
    .container {
      display: block;
    }
  }
`;

export default MyGames;
