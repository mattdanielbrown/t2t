'use strict';

// Formula	: (0°F − 32) × 5/9
// Example  : (0°F − 32) × 5/9 = -17.78°C

export default function (fahrenheit) {
	return ((fahrenheit - 32) * (5/9));
}
