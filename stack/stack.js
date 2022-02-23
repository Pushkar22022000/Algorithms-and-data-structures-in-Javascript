// Palindrome example

let letters = [];
let word = "racecar";
// let word = "Konverge";
let rword = "";

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// console.log(letters);

for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}
// console.log(rword);

if (word === rword) {
  console.log(`${word} is a palindrome.`);
} else {
  console.log(`${word} is not a palindrome.`);
}