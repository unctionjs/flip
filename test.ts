
import flip from "./index";

const key = (name) => (iterable) => iterable[name];

test("works", () => {
  expect(flip(key)({aaa: "1"})("aaa")).toEqual("1");
});
