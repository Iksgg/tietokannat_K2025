//Pyytää käyttäjää antamaan sanan
//tarkistaa onko sana palindormi vai ei
const prompt = require('prompt-sync')()

var word = prompt("Give word to check: ")

function isPalindorme(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return "No"
        }
        j--
    }
    return "Yes"
}

console.log("Is the word a palindrome: %s", isPalindorme(word))