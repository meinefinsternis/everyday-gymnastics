import { Equal, Expect } from "../utils";

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ObjectEntries<TObject> = {
  [key in keyof TObject]-?: [key, TObject[key]];
}[keyof TObject];

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries =
  | ["name", string]
  | ["age", number]
  | ["locations", string[] | null];

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ["key", undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ["key", undefined]>>
];
