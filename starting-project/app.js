function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result ', num);
}
function addAndHandle(n1, n2, cb) {
    var result = add(n1, n2);
    cb(result);
}
var combineValues;
combineValues = add;
console.log(combineValues(2, 5));
var combineValues2 = addAndHandle;
combineValues2(4, 6, printResult);
