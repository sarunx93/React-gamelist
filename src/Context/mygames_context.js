import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../Reducers/mygame-reducer";

const getLocalStorage = () => {
  let game = localStorage.getItem("gamelist");
  if (game) {
    return JSON.parse(localStorage.getItem("gamelist"));
  } else {
    return [];
  }
};

const initialState = {
  gameList: getLocalStorage(),
};

const MyGameContext = React.createContext();

export const MyGameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToMyGames = (id, title, platform, thumbnail) => {
    console.log(id);
    dispatch({
      type: "ADD_TO_MYGAMES",
      payload: { id, title, platform, thumbnail },
    });
  };
  const removeGame = (id) => {
    console.log(id);
    dispatch({ type: "REMOVE_GAME", payload: id });
  };
  const clearGame = () => {
    dispatch({ type: "CLEAR_GAME" });
  };

  useEffect(() => {
    localStorage.setItem("gamelist", JSON.stringify(state.gameList));
  }, [state.gameList]);
  return (
    <MyGameContext.Provider
      value={{ ...state, addToMyGames, removeGame, clearGame }}
    >
      {children}
    </MyGameContext.Provider>
  );
};

export const useMyGameContext = () => {
  return useContext(MyGameContext);
};
