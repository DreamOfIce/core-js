# [`Map.prototype.emplace`](https://github.com/thumbsupep/proposal-upsert)

## Modules

- [`esnext.map.emplace`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.map.emplace.js)
- [`esnext.weak-map.emplace`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.weak-map.emplace.js)

## Types

```ts
class Map {
  emplace(key: any, { update: (value: any, key: any, handler: object) => updated: any, insert: (key: any, handler: object) => value: any): updated | value;
}

class WeakMap {
  emplace(key: any, { update: (value: any, key: any, handler: object) => updated: any, insert: (key: any, handler: object) => value: any): updated | value;
}
```

## Entry points

```
core-js/proposals/map-upsert-stage-2
core-js(-pure)/full/map/emplace
core-js(-pure)/full/weak-map/emplace
```

## Example

[_Example_](https://is.gd/ty5I2v):

```js
const map = new Map([["a", 2]]);

map.emplace("a", { update: (it) => it ** 2, insert: () => 3 }); // => 4

map.emplace("b", { update: (it) => it ** 2, insert: () => 3 }); // => 3

console.log(map); // => Map { 'a': 4, 'b': 3 }
```