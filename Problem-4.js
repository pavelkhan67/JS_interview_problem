// How to flatten multi-dimensional array
const myArr = ["Me", ["Pavel", "Programmer"], ["Developer", "Khan"]];
const flatArray = myArr.flat();
console.log(flatArray);

//when multilevel array

const myArr2 = [
  "Me",
  ["Pavel", ["Coder"], "Programmer"],
  ["Developer", "Khan", ["Pavel Khan"]],
];
const myArr3 = myArr2.flat(Infinity);
console.log(myArr3);
