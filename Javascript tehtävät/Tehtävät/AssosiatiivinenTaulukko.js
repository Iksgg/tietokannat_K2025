const bookArray=[
    {'id_book' :"1", 'name':"Everything You Ever Wanted to Know", 'author' :"Upton", 'isbn': "082305649x"},
    {'id_book' :"2", 'name':"Photography", 'author' :"	Vilppu", 'isbn': "205711499"},
    {'id_book' :"3", 'name':"Drawing Manual Vilppu", 'author' :"Zelanshi", 'isbn': "1892053039"},
    {'id_book' :"4", 'name':"TBA", 'author' :"Zelanshi", 'isbn': "0534613932"}
];

//bookArrayn tyyppi
console.log("Array tyyppi: ", typeof(bookArray));
//koko bookArray
console.log(bookArray);
//bookArrayn ensimmäinen rivi
console.log(bookArray[0]);
//Ensimmäisen kirjan nimi
console.log("Kirjan nimi: ", bookArray[0].name);
//Rivien määrä
console.log("Rivien määrä: ", bookArray.length);
//Kaikien kirjojen nimet
var bookName = bookArray.map(book => book.name)
console.log("Kirjojen nimet: ", bookName);