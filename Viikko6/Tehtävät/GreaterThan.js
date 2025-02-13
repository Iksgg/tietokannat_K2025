//Kysyy käyttäjältä kaksi lukua ja palauttaa niistä suuremman

const prompt = require('prompt-sync')()

function GreaterThan() {
    //Ensimmäinen numero
    var in1 = prompt("Enter first number: ")
    var num1 = parseInt(in1)

    //Toinen numero
    var in2 = prompt("Enter second number: ")
    var num2 = parseInt(in2)

    //Vertaa numeroita ja palauttaa suurimman
    if (num1 > num2) {
        return num1
    } else if (num1 < num2) {
        return num2
    } else {
        throw new Error("Numbers are equal")
    }
}

try {
    console.log("Numero %d on suurempi", GreaterThan())
} catch (error) {
    console.log(error.message)
}