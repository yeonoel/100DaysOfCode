function repeatStringNumTimes(str, num) {
  let sstr = "";
  while(num > 0) {
      sstr += str;
      num--;
  }
  return (sstr);
}

repeatStringNumTimes("abc", 3);
