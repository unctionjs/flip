/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import flip from "./source"

const key = (name) => (iterable) => iterable[name]

test(({same, end}) => {
  same(
    flip(key)({aaa: "1"})("aaa"),
    "1"
  )

  end()
})
