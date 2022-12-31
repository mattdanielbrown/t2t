#!/usr/bin/env node

'use strict';


const celsius = (fahrenheit) => {
	return ((fahrenheit - 32) * (5 / 9));
}

const fahrenheit = (celsius) => {
	return ((celsius * (9 / 5)) + 32);
}

module.exports = {
	celsius,
	fahrenheit
};
