import { Equal, Expect } from "../utils";

type PartialByKeys<T, U extends keyof T> = {
  [K in keyof T as K extends U ? K : never]?: T[K];
} & {
  [K in keyof T as K extends U ? never : K]: T[K];
} extends infer R
  ? { [K in keyof R]: R[K] }
  : never;

interface User {
  name: string;
  age: number;
  address: string;
}

interface UserPartialName {
  name?: string;
  age: number;
  address: string;
}

interface UserPartialNameAndAge {
  name?: string;
  age?: number;
  address: string;
}

type cases = [
  Expect<Equal<PartialByKeys<User, "name">, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, "name" | "age">, UserPartialNameAndAge>>
];
