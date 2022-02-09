import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Context/context";
const SingleGame = () => {
  const { title } = useParams();
  console.log(title);
  const [singleGame, setSingleGame] = useState([]);
  const { games } = useGlobalContext();
  const selectedGame = games.find((game) => game.title === title);
  console.log(selectedGame);

  return <h1>Single Game naja</h1>;
};

export default SingleGame;
