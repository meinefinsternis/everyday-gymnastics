type CamelCase<
  T extends string,
  Separator extends string = "-"
> = Lowercase<T> extends `${infer H}${Separator}${infer R}`
  ? `${Capitalize<H>}${CamelCase<Capitalize<R>>}`
  : T;

type c = CamelCase<"foo-bar-baz">; // FooBarBaz
type c1 = CamelCase<"foo---bar-baz">; // FooBarBaz
type c2 = CamelCase<"foo-bar--baz">; // FooBarBaz
type c3 = CamelCase<"foo-bar">; // FooBar
type c4 = CamelCase<"THIS-IS-A-SCREAM-KEBAB">; // ThisIsAScreamKebab
