// @flow

const _randomIndexOf = (arr: Array<mixed>): mixed => {
  const randomIndex: number = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const removeDuplicatesFrom = (arrOne: Array<mixed>, arrTwo: Array<mixed>) => {
  const uniqueArr = arrTwo.filter(
    value => arrOne.map(value => value.color).indexOf(value) === -1
  );

  return _randomIndexOf(uniqueArr);
};

export default removeDuplicatesFrom;
