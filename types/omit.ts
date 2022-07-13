import { Equal, Expect } from "../utils";

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}

type MyOmit<T, U extends keyof T> = {
  [K in keyof T as K extends U ? Exclude<K, U> : K]: T[K];
};

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, "description">>>,
  Expect<Equal<Expected2, MyOmit<Todo, "description" | "completed">>>
];
