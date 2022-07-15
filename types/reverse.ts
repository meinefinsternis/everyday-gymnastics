import { Equal, Expect } from "../utils";

type Reverse<T extends any[]> = T extends [infer H, ...infer R]
  ? [...Reverse<R>, H]
  : [];

type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<["a", "b"]>, ["b", "a"]>>,
  Expect<Equal<Reverse<["a", "b", "c"]>, ["c", "b", "a"]>>
];
