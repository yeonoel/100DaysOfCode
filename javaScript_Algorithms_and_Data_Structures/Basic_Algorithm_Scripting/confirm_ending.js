function confirmEnding(str, target) {
  let str_len = str.length;
  let target_len = target.length; 

  if (str.slice((str_len - target_len)) == target) {
    return true
  }
  return (false);

}

confirmEnding("Bastian", "n");
