function truncateString(str, num) {

  let sstr = "";
  sstr = str.slice(0, num) 
  return str.length > num ? str.slice(0, num)+"..." : str;
  
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);
