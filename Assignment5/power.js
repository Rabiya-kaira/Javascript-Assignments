function power(base, exponent) {
	var result = 1;
	if(exponent == 0)
		exponent = 2;
	for(var i=1; i<=exponent; i++) {
		result = result * base;
	}
	return result;
}

console.log(power(2,4));
console.log(power(3,3));