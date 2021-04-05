const tower = require("../index");

test("tower(3) will give 7 steps", () => {
  expect(tower.towerHanoi(3)).toBe(7);
});
