import { Equal, Expect } from "../utils";

type TrimLeft<T> = T extends `${infer Head}${infer Rest}`
  ? Head extends " " | "\n" | "\t"
    ? TrimLeft<Rest>
    : `${Head}${Rest}`
  : "";

type cases = [
  Expect<Equal<TrimLeft<"str">, "str">>,
  Expect<Equal<TrimLeft<" str">, "str">>,
  Expect<Equal<TrimLeft<"     str">, "str">>,
  Expect<Equal<TrimLeft<"     str     ">, "str     ">>,
  Expect<Equal<TrimLeft<"   \n\t foo bar ">, "foo bar ">>,
  Expect<Equal<TrimLeft<"">, "">>,
  Expect<Equal<TrimLeft<" \n\t">, "">>
];
