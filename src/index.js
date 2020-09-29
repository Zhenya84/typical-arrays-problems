
exports.min = function min (array) {
    if (array.length !== 0) {
        let result = array[0];
        for (let i = 0; i < array.length; i++) {
            if (result > array[i]) {
        result = array[i]}
        }
        return result}
    else return 0
}

exports.max = function max (array) {
    if (array.length !== 0) {
        let result = array[0];
        for (let i = 0; i < array.length; i++) {
            if (result < array[i]) {
        result = array[i]}
        }
        return result}
    else return 0
}

exports.avg = function avg (array) {
  if (array.length !== 0) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i]}
    return result/(array.length)}
  else return 0
}
