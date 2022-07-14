import { Equal, Expect } from "../utils";

type Without<T extends any[], U> = T extends [infer H, ...infer R]
  ? H extends T[number] & (U extends any[] ? U[number] : U)
    ? Without<R, U>
    : [H, ...Without<R, U>]
  : [];

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
];
