function isPalindrome(abba) {

let start =0
let finish =abba.length - 1

while (start < finish) {
  if (abba[start++] != abba[finish--]) {
    return false
  }
  start ++
  finish --
}
return true
}
/* 
  Add your pseudocode here
*/


  // isPalindrome(abba)


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

