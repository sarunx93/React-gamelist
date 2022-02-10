import React, { useContext, useReducer } from "react";
import reducer from "../Reducers/mygame-reducer";

//Get data from firebase

const initialState = {
  gameList: [],
  total_items: 0,
};

const MyGameContext = React.createContext();

export const MyGameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToMyGames = (id, genre, title, platform, thumbnail) => {
    dispatch({
      type: "ADD_TO_MYGAMES",
      payload: { id, genre, title, platform, thumbnail },
    });
  };

  return (
    <MyGameContext.Provider value={{ ...state }}>
      {children}
    </MyGameContext.Provider>
  );
};

export const useMyGameContext = () => {
  return useContext(MyGameContext);
};
