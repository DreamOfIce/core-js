import { STRICT } from '../helpers/constants';
import { createIterator } from '../helpers/helpers';

import Iterator from 'core-js-pure/full/iterator';

QUnit.test('Iterator#indexed', assert => {
  const { indexed } = Iterator.prototype;

  assert.isFunction(indexed);
  assert.arity(indexed, 0);
  assert.nonEnumerable(Iterator.prototype, 'indexed');

  assert.arrayEqual(indexed.call(createIterator(['a', 'b', 'c'])).toArray().toString(), '0,a,1,b,2,c', 'basic functionality');

  if (STRICT) {
    assert.throws(() => indexed.call(undefined), TypeError);
    assert.throws(() => indexed.call(null), TypeError);
  }

  assert.throws(() => indexed.call({}).next(), TypeError);
  assert.throws(() => indexed.call([]).next(), TypeError);
});
