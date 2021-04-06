const tower = require("../index");

test("tower.towerHanoi(3) will give 7 steps", () => {
  expect(tower.towerHanoi(3)).toBe(7);
});

test("tower.towerHanoi(5) will give 31 steps", () => {
  expect(tower.towerHanoi(5)).toBe(31);
});

test("tower.towerHanoi(0) will give 0 steps", () => {
  expect(tower.towerHanoi(0)).toBe(0);
});
