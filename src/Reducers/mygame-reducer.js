const mygame_reducer = (state, action) => {
  if (action.type === "ADD_TO_MYGAMES") {
    const { id, title, platform, thumbnail, added } = action.payload;
    console.log(id);

    const tempGame = state.gameList.find((game) => game.id === id);

    if (tempGame) {
      const tempGameList = state.gameList.map((game) => {
        if (game.id === id) {
          return;
        } else {
          return game;
        }
      });
      return { ...state, gameList: tempGameList };
    } else {
      const newGame = { id, title, platform, thumbnail, added };

      return { ...state, gameList: [...state.gameList, newGame] };
    }
  }
  if ((action.type = "REMOVE_GAME")) {
    const tempGame = state.gameList.filter(
      (item) => item.id !== action.payload
    );
    return { ...state, gameList: tempGame };
  }
  if (action.type === "CLEAR_GAME") {
    return { ...state, gameList: [] };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};
export default mygame_reducer;
