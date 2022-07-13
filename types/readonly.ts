import { Alike, Expect } from "../utils";

type MyReadonly<T, U extends keyof T = keyof T> = {
  readonly [K in keyof T]: T[K];
} & {
  -readonly [K in keyof T as K extends U ? never : K]: T[K];
};

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}

type cases = [
  Expect<Alike<MyReadonly<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly<Todo1, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly<Todo2, "title" | "description">, Expected>>
];
