const { titleCased } = require('./index');

test("returns an array with title case tutorial names", () => {
  const result = titleCased();
  expect(result[0]).toBe("What Does The This Keyword Mean?");
  expect(result).toHaveLength(10);
});
