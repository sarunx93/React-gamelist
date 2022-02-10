import React, { useContext, useReducer } from "react";
import reducer from "../Reducers/mygame-reducer";

// Get data from firebase
// dispatch actions here
// manipulate states in mygames reducer
const initialState = {
  gameList: [],
  total_items: 0,
};

const MyGameContext = React.createContext();

export const MyGameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToMyGames = (id, title, platform, thumbnail) => {
    dispatch({
      type: "ADD_TO_MYGAMES",
      payload: { id, title, platform, thumbnail },
    });
  };

  return (
    <MyGameContext.Provider value={{ ...state, addToMyGames }}>
      {children}
    </MyGameContext.Provider>
  );
};

export const useMyGameContext = () => {
  return useContext(MyGameContext);
};
