function rangeOfNumbers(startNum, endNum) {
  
  if (startNum > endNum){
    return ([]);
  } else {
    const count = rangeOfNumbers(startNum + 1, endNum);
    count.unshift(startNum);
    return (count);
  }
};
