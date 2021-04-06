const towerHanoi = (n) => {
  let totalStep = 1;

  if (n === 0) {
    return n;
  }

  if (n === 1) {
    return totalStep;
  } else {
    totalStep += towerHanoi(n - 1);

    totalStep += towerHanoi(n - 1);
  }

  return totalStep;
};
exports.towerHanoi = towerHanoi;
