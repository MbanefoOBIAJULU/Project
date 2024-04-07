let guessNumber = parseInt(prompt("enter any number of your choice"));
for (let i = 1; i <= guessNumber; i++) {
    if ((i % 3 ==0) && (i % 5 ==0)) {
        console.log("fizzBuzz")
    }
    else if(i % 3 ==0){
    console.log("fizz")
}
else if(i % 5 ==0){
console.log("buzz")
}
 else console.log(i)
}