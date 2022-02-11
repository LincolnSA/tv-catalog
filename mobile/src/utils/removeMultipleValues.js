const removeMutipleValues = (array) => {
  return array.sort().reduce((init, current) => {
    if (init.length === 0 || init[init.length - 1] !== current) {
      init.push(current);
    }
    return init;
  }, []);
};

export default removeMutipleValues;
