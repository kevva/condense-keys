import test from 'ava';
import fn from './';

test(t => {
	const obj = {
		a: 'foo',
		b: null,
		c: undefined,
		d: '',
		e: {
			a: null,
			b: undefined,
			c: 'foo'
		}
	};

	t.same(fn(obj), {a: 'foo', e: {c: 'foo'}});
	t.end();
});
