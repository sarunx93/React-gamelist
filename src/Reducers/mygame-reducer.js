const mygame_reducer = (state, action) => {
  if (action.type === "ADD_TO_MYGAMES") {
    const { id, title, platform, thumbnail } = action.payload;
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
      const newGame = { id, title, platform, thumbnail };
      console.log(action.payload);
      console.log(newGame);
      const submitGameToBackend = async (games) => {
        await fetch(
          "https://react-http-d2108-default-rtdb.firebaseio.com/gamelist.json",
          {
            method: "POST",
            body: JSON.stringify(games),
          }
        );
      };
      submitGameToBackend(newGame);
      return { ...state, gameList: [...state.gameList, newGame] };
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};
export default mygame_reducer;
