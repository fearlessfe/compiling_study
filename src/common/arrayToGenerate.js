// 将数组变为一个iterate

function* arrayToGenerate(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i];
  }
}

module.exports = arrayToGenerate;
