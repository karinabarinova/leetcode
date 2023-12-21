const isPalindrome = require("./index");

test("'A man, a plan, a canal: Panama' returns true", () => {
  expect(isPalindrome('A man, a plan, a canal: Panama')).toEqual(true);
});

test("'love' return false", () => {
  expect(isPalindrome('love')).toEqual(false);
});

test("'' return true", () => {
  expect(isPalindrome('')).toEqual(true);
});

test("'_a___' return true", () => {
  expect(isPalindrome('_a___')).toEqual(true);
});