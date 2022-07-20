import { Equal, Expect } from "../utils";

type Reverse<T extends string | number> = `${T}` extends `${infer H}${infer R}`
  ? `${Reverse<R>}${H}`
  : T;

type isPalindrome<T extends string | number> = `${T}` extends Reverse<T>
  ? true
  : false;

type cases = [
  Expect<Equal<isPalindrome<"abc">, false>>,
  Expect<Equal<isPalindrome<"b">, true>>,
  Expect<Equal<isPalindrome<"abca">, false>>,
  Expect<Equal<isPalindrome<"abcba">, true>>,
  Expect<Equal<isPalindrome<121>, true>>,
  Expect<Equal<isPalindrome<19260817>, false>>
];
