function findLongestWordLength(str) {
  str = str.split(' ');
  let x = 0;
  for (let i = 0; i < str.length; i++) {
    if (i == 0) {
      x = str[i].length;
    } else {
      if (str[i].length > x){
        x = str[i].length;
      }
    }
  }
  return x;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
