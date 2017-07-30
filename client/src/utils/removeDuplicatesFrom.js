const _randomIndexOf = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

const removeDuplicatesFrom = (arrOne, arrTwo) => {
  const uniqueArr = arrTwo.filter(value =>
    arrOne.map(value => value.color).indexOf(value) === -1
  );

  return _randomIndexOf(uniqueArr);
}

export default removeDuplicatesFrom;
