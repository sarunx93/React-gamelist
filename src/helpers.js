export const getUniqueValues = (data, cat) => {
  let unique = data.map((item) => item[cat]);
  return ["all", ...new Set(unique)];
};

export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};
