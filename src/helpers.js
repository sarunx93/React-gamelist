export const getUniqueValues = (data, cat) => {
  let unique = data.map((item) => item[cat]);
  return ["all", ...new Set(unique)];
};

// export const paginate = (games) => {
//   const itemsPerPage = 36;
//   const pages = Math.ceil(games.length / itemsPerPage);
//   const newGames = Array.from({ length: pages }, (_, index) => {
//     const start = index * itemsPerPage;
//     return games.slice(start, start + itemsPerPage);
//   });
//   return newGames;
// };
