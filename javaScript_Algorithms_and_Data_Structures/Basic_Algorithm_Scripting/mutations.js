function mutation(arr) {
  const arr1 = arr[0].toLowerCase();
  const arr2 = arr[1].toLowerCase();
  let count = 0;

    for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) >= 0) {
        count ++;
    }
    
  }

if (count === arr2.length) {
  return (true);
}
  return (false);
}

mutation(["hello", "hey"]);
