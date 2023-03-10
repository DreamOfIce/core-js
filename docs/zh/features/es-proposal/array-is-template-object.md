---
category: feature
tag:
  - es-proposal
  - untranslated
---

# [`Array.isTemplateObject`](https://github.com/tc39/proposal-array-is-template-object)

## Module

[`esnext.array.is-template-object`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.array.is-template-object.js)

## Types

```ts
class Array {
  static isTemplateObject(value: any): boolean;
}
```

## Entry points

```
core-js/proposals/array-is-template-object
core-js(-pure)/full/array/is-template-object
```

## Example

```js
console.log(Array.isTemplateObject(((it) => it)`qwe${123}asd`)); // => true
```
