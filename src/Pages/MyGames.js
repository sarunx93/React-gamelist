import React, { useState, useEffect } from "react";
const MyGames = () => {
  const [myGames, setMyGames] = useState([]);
  const fetchMyGames = async () => {
    try {
      const response = await fetch(
        "https://react-http-d2108-default-rtdb.firebaseio.com/gamelist.json"
      );
      const data = await response.json();
      const loadedData = [];
      for (const key in data) {
        loadedData.push({
          id: key,
          title: data[key].title,
          platform: data[key].platform,
          thumbnail: data[key].thumbnail,
        });
      }
      const result = Array.from(
        new Set(loadedData.map((game) => game.title))
      ).map((title) => {
        return {
          title,
          platform: loadedData.find((game) => game.title === title).platform,
          thumbnail: loadedData.find((game) => game.title === title).thumbnail,
        };
      });
      setMyGames(result);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(myGames);
  useEffect(() => {
    fetchMyGames();
  }, []);
  return (
    <>
      {myGames.map((game) => {
        return <h1 key={game.thumbnail}>{game.title}</h1>;
      })}
    </>
  );
};

export default MyGames;
