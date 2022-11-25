function titleCase(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();  
  };
  words = words.join(' ');
  return words;
}

titleCase("I'm a little tea pot");
