function towerHanoi(n) {
  let first = "first tower";
  let second = "second tower";
  let third = "third tower";
  let temp;
  let totalStep = 1;

  if (n === 0) {
    return n;
  }

  if (n === 1) {
    console.log(`${first} -> ${third}`);
    return totalStep;
  } else {
    temp = second;
    second = third;
    third = temp;

    totalStep += towerHanoi(n - 1);

    console.log(`${first} -> ${third}`);
    temp = first;
    first = second;
    second = temp;

    totalStep += towerHanoi(n - 1);
  }

  return totalStep;
}

// function resetTower(first, second, third) {
//   let temp;

//   temp = second;
//   second = third;
//   third = temp;
// }
// console.log(towerHanoi(3));
exports.towerHanoi = towerHanoi;
