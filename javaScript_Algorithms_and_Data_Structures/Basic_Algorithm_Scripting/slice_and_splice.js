function frankenSplice(arr1, arr2, n) {
  let myArr = [...arr2];
  for (let i = 0; i < arr1.length; i++) {
    myArr.splice(n + i, 0, arr1[i]);
  }
  return myArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
