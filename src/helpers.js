export const getUniqueValues = (data, cat) => {
  let unique = data.map((item) => item[cat]);
  return ["all", ...new Set(unique)];
};
