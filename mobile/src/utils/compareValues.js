const compareValues = (valueOne, valueTwo) => {
  return valueOne
    .toString()
    .trim()
    .toUpperCase()
    .includes(valueTwo.toString().trim().toUpperCase());
};
export default compareValues;
