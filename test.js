import test from 'ava';
import m from './';

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

	t.deepEqual(m(obj), {a: 'foo', e: {c: 'foo'}});
});
