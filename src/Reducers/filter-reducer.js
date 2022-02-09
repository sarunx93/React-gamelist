const filter_reducer = (state, action) => {
  if (action.type === "LOAD_GAMES") {
    return {
      ...state,
      all_games: [...action.payload],
      filtered_games: [...action.payload],
    };
  }

  throw new Error(`No Matching "${action.type}"-action type`);
};
export default filter_reducer;
