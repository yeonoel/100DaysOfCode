function getIndexToIns(arr, num) {
  arr.sort((a, b) => a -b );
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      arr.splice(i, 0, num);
      return (i);
    }
  }

  arr.push(num);
  return (arr.length - 1)
  
}

getIndexToIns([40, 60], 50);
