// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
let test = false;
let prop_test = false;
for (const item of contacts){
  if (item.firstName == name){
    test = true;
    if (item.hasOwnProperty(prop)){
      return (item[prop]);
    }

  }

}
if (!test){
  return ("No such contact");
}
if (!prop_test){
  return ("No such property");
}
  // Only change code above this line
}

lookUpProfile("Akira", "likes");
