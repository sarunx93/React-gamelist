import React, { useContext, useEffect, useReducer } from "react";
import { useGlobalContext } from "./context";
import filter_reducer from "../Reducers/filter-reducer";
const initialState = {
  filtered_games: [],
  all_games: [],
};
const FilterContext = React.createContext();
export const FilterProvider = ({ children }) => {
  const { games } = useGlobalContext();
  const [state, dispatch] = useReducer(filter_reducer, initialState);
  useEffect(() => {
    dispatch({ type: "LOAD_GAMES", payload: games });
  }, [games]);
  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
