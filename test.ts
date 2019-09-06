
import flip from "./index.ts";

const key = (name) => (iterable) => iterable[name];

test(() => {
  expect(flip(key)({aaa: "1"})("aaa")).toEqual("1");
});
