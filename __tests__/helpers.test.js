const { format_date, format_plural, format_url } = require("../utils/helpers");

// makes the urls length shorter
test("format_url() returns a simplified url string", () => {
  const url1 = format_url("http://test.com/page/1");
  const url2 = format_url("https://www.ign.com/");
  const url3 = format_url("https://thatsthefinger.com/");

  expect(url1).toBe("test.com");
  expect(url2).toBe("ign.com");
  expect(url3).toBe("thatsthefinger.com");
});

// tests to see if words get pluralized
test("format_plural() returns a pluralized word", () => {
  const word1 = format_plural("game", 1);
  const word2 = format_plural("controller", 2);

  expect(word1).toBe("game");
  expect(word2).toBe("controllers");
});

// tests the structured layour of new date
test("format_date() returns a date string", () => {
  const date = new Date("2021-05-11 8:59:21");

  expect(format_date(date)).toBe("5/11/2021");
});
