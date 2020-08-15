function add(n1: number, n2: number) {
	return n1 + n2;
}

function printResult(num: number) {
	console.log('Result ', num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	const result = add(n1, n2);
	cb(result);
}

let combineValues: (param1: number, param2: number) => number;

combineValues = add;

console.log(combineValues(2, 5));

const combineValues2 = addAndHandle;
combineValues2(4, 6, printResult);
