'use strict';

const index = require('../index');

test('convert 32 degrees fahrenheit to 0 degrees celsius', () => {
	expect(index.celsius( 32)).toBe(0);
});

test('convert 0 degrees celsius to 32 degrees fahrenheit', () => {
	expect(index.fahrenheit(0)).toBe(32);
});
