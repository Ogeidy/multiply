module.exports = function multiply(first, second) {
  let aArray = first.split('');
  let bArray = second.split('');
  let buf = new Array(bArray.length).fill(0);
  buf.forEach(function(item, index, array) {
    array[index] = new Array(aArray.length + bArray.length).fill(0);
  });
  let answ = new Array(aArray.length + bArray.length).fill(0);

  for (let i = bArray.length - 1; i >= 0; i--) {
    for (let j = aArray.length - 1; j >= 0; j--) {
      let product = Number(bArray[i]) * Number(aArray[j]) + buf[bArray.length - i - 1][j + i + 1];
      buf[bArray.length - i - 1][j + i + 1] = product % 10;
      buf[bArray.length - i - 1][j + i] = (product - (product % 10)) / 10;
    }
  }

  for (let i = aArray.length + bArray.length - 1; i >= 0; i--) {
    for (let j = 0; j < bArray.length; j++) {
      answ[i] += buf[j][i];
    }
    if (answ[i] > 9) {
      answ[i-1] = (answ[i] - (answ[i] % 10)) / 10;
      answ[i] = answ[i] % 10;
    }
  }

  if (answ[0] == 0) {
    answ.splice(0, 1);
  }

  return answ.join('');
}
