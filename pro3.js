for (var w = 1; w < 201; w++) {
    if ((w % 3 == 0) && (w % 5 == 0)) console.log("FizzBuzz");
    else if (w % 3 == 0) console.log("Fizz");
    else if (w % 5 == 0) console.log("Buzz");
    else console.log(w);
}
  