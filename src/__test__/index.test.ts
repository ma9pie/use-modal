const { add, sub, mul, div } = require("@/utils");

describe("init test", () => {
  test("", () => {
    const result = "init test";
    expect(result).toEqual("init test");
  });
  test("", () => {
    expect(add(1, 1)).toEqual(2);
  });
  test("", () => {
    expect(add(100, 100)).toEqual(200);
  });

  test("", () => {
    expect(sub(1, 1)).toEqual(0);
  });
  test("", () => {
    expect(sub(3, 5)).toEqual(-2);
  });

  test("", () => {
    expect(mul(10, 10)).toEqual(100);
  });
  test("", () => {
    expect(mul(2, -2)).toEqual(-4);
  });

  test("", () => {
    expect(div(5, 10)).toEqual(0.5);
  });
  test("", () => {
    expect(div(60, -12)).toEqual(-5);
  });
});
