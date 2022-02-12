import React, { useContext, useEffect, useReducer } from "react";
import { useGlobalContext } from "./context";
import filter_reducer from "../Reducers/filter-reducer";
const initialState = {
  filtered_games: [],
  all_games: [],
  filters: {
    text: "",
    platform: "all",
    genre: "all",
  },
};
const FilterContext = React.createContext();
export const FilterProvider = ({ children }) => {
  const { games } = useGlobalContext();
  const [state, dispatch] = useReducer(filter_reducer, initialState);
  useEffect(() => {
    dispatch({ type: "LOAD_GAMES", payload: games });
  }, [games]);
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [games, state.filters]);
  const updateFilters = (e) => {
    //getting value from an element that is calling on change
    let name = e.target.name;
    let value = e.target.value;
    if (name === "platform") {
      value = e.target.textContent;
    }

    dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  return (
    <FilterContext.Provider value={{ ...state, updateFilters, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
