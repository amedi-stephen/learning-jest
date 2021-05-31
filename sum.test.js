const sum = require("./sum");

// matchers -->
test("adds 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});

// to Equal
test("object added", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// checking
test("for null", () => {
  const num = 12;
  if (num === 11) {
    expect(num).toBeFalsy();
  }
});

test("adds 2 + 2 to equal 4", () => {
  const value = 2 + 2;
  expect(value).toEqual(4);
});

// adding a float number
test("add 0.4 + 0.4", () => {
  const value = 0.9 + 0.9;
  expect(value).toBeCloseTo(1.8);
});

// testing strings
test("check regex", () => {
  expect("Christopher").toMatch(/chris/i);
});

// testing arrays
const fruits = ["mangoes", "bananas", "apples"];
test("contain bananas", () => {
  // expect(fruits).toContain("bananas");
  expect(new Set(fruits)).toContain("bananas");
});

//exceptions
function compileAndroidCode() {
  throw new Error("You are using the wrong JDK");
}

test("Error", () => {
  expect(() => compileAndroidCode()).toThrow(Error);
});
