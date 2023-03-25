---
category: feature
tag:
  - es-proposal
---

# [新的 `Set` 方法](https://github.com/tc39/proposal-set-methods)

## 模块

- [`esnext.set.difference`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.set.difference.js)
- [`esnext.set.intersection`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.set.intersection.js)
- [`esnext.set.is-disjoint-from`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.set.is-disjoint-from.js)
- [`esnext.set.is-subset-of`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.set.is-subset-of.js)
- [`esnext.set.is-superset-of`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.set.is-superset-of.js)
- [`esnext.set.symmetric-difference`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.set.symmetric-difference.js)
- [`esnext.set.union`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.set.union.js)

## 类型

```ts
class Set {
  difference(other: SetLike<mixed>): Set;
  intersection(other: SetLike<mixed>): Set;
  isDisjointFrom(other: SetLike<mixed>): boolean;
  isSubsetOf(other: SetLike<mixed>): boolean;
  isSupersetOf(other: SetLike<mixed>): boolean;
  symmetricDifference(other: SetLike<mixed>): Set;
  union(other: SetLike<mixed>): Set;
}
```

## 入口点

```
core-js/proposals/set-methods-v2
core-js(-pure)/actual|full/set/difference
core-js(-pure)/actual|full/set/intersection
core-js(-pure)/actual|full/set/is-disjoint-from
core-js(-pure)/actual|full/set/is-subset-of
core-js(-pure)/actual|full/set/is-superset-of
core-js(-pure)/actual|full/set/symmetric-difference
core-js(-pure)/actual|full/set/union
```

## 示例

[_示例_](https://tinyurl.com/2henaoac):

```js
new Set([1, 2, 3]).union(new Set([3, 4, 5])); // => Set {1, 2, 3, 4, 5}
new Set([1, 2, 3]).intersection(new Set([3, 4, 5])); // => Set {3}
new Set([1, 2, 3]).difference(new Set([3, 4, 5])); // => Set {1, 2}
new Set([1, 2, 3]).symmetricDifference(new Set([3, 4, 5])); // => Set {1, 2, 4, 5}
new Set([1, 2, 3]).isDisjointFrom(new Set([4, 5, 6])); // => true
new Set([1, 2, 3]).isSubsetOf(new Set([5, 4, 3, 2, 1])); // => true
new Set([5, 4, 3, 2, 1]).isSupersetOf(new Set([1, 2, 3])); // => true
```