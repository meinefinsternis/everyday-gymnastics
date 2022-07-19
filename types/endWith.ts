type EndsWith<T extends string, U extends string> = T extends `${infer H}${U}`
  ? true
  : false;

import { Equal, Expect } from "../utils";

type cases = [
  Expect<Equal<EndsWith<"abc", "bc">, true>>,
  Expect<Equal<EndsWith<"abc", "abc">, true>>,
  Expect<Equal<EndsWith<"abc", "d">, false>>
];
