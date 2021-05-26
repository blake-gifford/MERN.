/* 
    Given in an interview
    Given a string
    return whether or not it's possible to make a palindrome out of the string's characters
    What is it about a string that makes it possible for it to be a palindrome?
*/
const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

function canStringBecomePalindrome(str) {
    let letterCounts = {};
    let letter;
    let palindromeSum = 0;
    for(let i = 0; i < str.length; i++){
        letter = str[i];
        letterCounts[letter] = letterCounts[letter] || 0;
        letterCounts[letter]++;
    }
    for(let letterCounts in letterCounts){
        palindromeSum += letterCounts[letterCounts] % 2;
    }
    return palindromeSum < 2;
}

console.log(canStringBecomePalindrome(str4));