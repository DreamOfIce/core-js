---
category: feature
tag:
  - es-proposal
---

# [`String.dedent`](https://github.com/tc39/proposal-string-dedent)

## 模块

[`esnext.string.dedent`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.string.dedent.js)

## 类型

```ts
class String {
  static dedent(
    templateOrTag: { raw: Array<string> } | function,
    ...substitutions: Array<string>
  ): string | function;
}
```

## 入口点

```
core-js/proposals/string-dedent
core-js(-pure)/full/string/dedent
```

## 示例

[_示例_](https://tinyurl.com/2lbnofgo):

```js
const message = 42;
console.log(String.dedent`
  print('${message}')
`); // => print('42')
String.dedent(console.log)`
  print('${message}')
`; // => ["print('", "')", raw: Array(2)], 42
```