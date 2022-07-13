import { Equal, Expect } from "../utils";

type Test = -100;

type Absolute<T extends string | number> =
  `${T}` extends `-${infer H}${infer R}` ? `${H}${R}` : `${T}`;

type cases = [
  Expect<Equal<Absolute<100>, "100">>,
  Expect<Equal<Absolute<-100>, "100">>,
  Expect<Equal<Absolute<2100>, "2100">>,
  Expect<Equal<Absolute<-0.5>, "0.5">>
];
