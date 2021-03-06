import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context/context";
import AddButton from "./AddButton";
import { useMyGameContext } from "../Context/mygames_context";

const Game = ({ id, genre, title, platform, thumbnail }) => {
  const { gameList } = useMyGameContext();
  const idArray = gameList.map((game) => game.id);
  const inStorage = idArray.includes(id);
  return (
    <Wrapper>
      <div className="container">
        <img src={thumbnail} alt="" />
        <Link to={`/${title}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5 className="column">{title}</h5>
        <h5 className="column">{genre}</h5>
      </footer>
      <footer>
        <p className="column">{platform}</p>
        {inStorage && <h5>Added</h5>}

        {!inStorage && (
          <AddButton
            id={id}
            title={title}
            platform={platform}
            thumbnail={thumbnail}
          />
        )}
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }
  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`;

export default Game;
