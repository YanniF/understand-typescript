function combine(input1: number | string, input2: number | string) {
	if (typeof input1 === 'number' && typeof input2 === 'number') return input1 + input2;
	else return input1.toString() + input2.toString();
}

console.log(combine(39, 59));
console.log(combine('Yanni', ' Fraga'));
