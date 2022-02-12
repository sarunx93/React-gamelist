const filter_reducer = (state, action) => {
  if (action.type === "LOAD_GAMES") {
    return {
      ...state,
      all_games: [...action.payload],
      filtered_games: [...action.payload],
      filters: { ...state.filters },
    };
  }
  if (action.type === "UPDATE_FILTERS") {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === "FILTER_PRODUCTS") {
    const { all_games } = state;
    const { text, platform, genre } = state.filters;
    let tempGames = [...all_games];
    if (text) {
      tempGames = tempGames.filter((game) => {
        return game.title.toLowerCase().startsWith(text);
      });
    }
    if (platform !== "all") {
      tempGames = tempGames.filter((game) => {
        return game.platform.toLowerCase() === platform.toLowerCase();
      });
    }
    if (genre !== "all") {
      tempGames = tempGames.filter((game) => {
        return game.genre === genre;
      });
    }
    return { ...state, filtered_games: tempGames };
  }
  if (action.type === "CLEAR_FILTERS") {
    return {
      ...state,
      filters: {
        text: "",
        platform: "all",
        genre: "all",
      },
    };
  }
  throw new Error(`No Matching "${action.type}"-action type`);
};
export default filter_reducer;
