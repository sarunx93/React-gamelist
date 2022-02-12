import React, { useState, useEffect } from "react";
import { useMyGameContext } from "../Context/mygames_context";
const MyGames = () => {
  const { gameList } = useMyGameContext();

  const { removeGame } = useMyGameContext();
  // const result = Array.from(new Set(gameList.map((game) => game.title))).map(
  //   (title) => {
  //     return {
  //       id: gameList.find((game) => game.title === title).id,
  //       title,
  //       platform: gameList.find((game) => game.title === title).platform,
  //       thumbnail: gameList.find((game) => game.title === title).thumbnail,
  //     };
  //   }
  // );
  return (
    <>
      {gameList.map((game) => {
        return (
          <>
            <h3>{game.title}</h3>
            <button type="button" onClick={() => removeGame(game.id)}>
              delete
            </button>
          </>
        );
      })}
    </>
  );
};

export default MyGames;
