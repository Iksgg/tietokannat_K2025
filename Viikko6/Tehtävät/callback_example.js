setTimeout(doSomething,2000);

function doSomething(){
    console.log("Demonstrating the callbacks");
}
console.log("The application is started");

//Anonymi Funktio
setTimeout(function(){
    console.log("Demonstrating the callbacks Anonymous Function");
}, 2000);
console.log("The Anonymous Funtion started");

//Nuoli Funktio
setTimeout(() => {
    console.log("Demonstrating the callbacks Arrow Function");
}, 2000);
console.log("The Arrow Function started");