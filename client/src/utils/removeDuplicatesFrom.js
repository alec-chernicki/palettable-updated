// @flow

const _randomIndexOf = (arr: Array<any>) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const removeDuplicatesFrom = (arrOne: Array<any>, arrTwo: Array<any>) => {
  const uniqueArr = arrTwo.filter(
    value => arrOne.map(value => value.color).indexOf(value) === -1
  );

  return _randomIndexOf(uniqueArr);
};

export default removeDuplicatesFrom;
