1.
let a = "#";
while (a.length <= 7) {
  console.log(a);
  a = a + "#";
} 


2.
for (let number = 1; number <=100 ; number++) {
  if (number % 3 == 0 && number % 5 == 0) {
    console.log("FizzBuzz")
  } else if(number % 3 == 0) {
    console.log("Fizz");
  } else if (number % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(number)
  }
  }
