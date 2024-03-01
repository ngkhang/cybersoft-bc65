function getHighOrLow(arr, key) {
  let idx;
  let score = (key === 'low') ? Infinity : -Infinity;

  arr.forEach((number, index) => {
    if ((key === 'low' && score > number)
      || (key === 'high' && score < number)) {
      score = number;
      idx = index;
    }
  });

  return [idx, score];
}