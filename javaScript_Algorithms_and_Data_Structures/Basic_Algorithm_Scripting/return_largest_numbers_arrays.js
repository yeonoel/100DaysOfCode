function largestOfFour(arr) {
  let myArray = [];
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j == 0) {
        x = arr[i][j];
      } else {
        if (arr[i][j] > x) {
          x = arr[i][j];
        }
      }
    }
    myArray.push(x);
  }
  return (myArray);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
