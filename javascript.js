/*
Braden Amorozo
Arrays and Objects
Dec. 5, 2016
*/

// variables
//ARRAYS
var numbers = [1,2,3,4,5,6,7,8,9,10];
var names = ["Senior Tan", "Zak", "Yolo Baggins", "Ohai", "Basic Jeff"];
var colors = ["light black", "ron burgandy", "highlighter"];
var adjectives = ["smart", "special case", "yummy", "tiny whiny", "ferocious"];
var slang = ["scrap", "kobe beef", "da kine", "li dat", "pau hana"];

//obects

var donut = {
	toppings : ["sprikles", "Chocolate Frosting", "o'hare air"],
	filling : "jelly",
	shape : "square",
	count : 12

}

// ------- Create a new branch --------- //


// Progression two - functions, conditionals and loops

  //Create and name a function with one parameter. console.log adding two values from the numbers array via the parameter. Invoke the function and pass the numbers array.

    //Invoke your function and pass your numbers array as the parameter.

 function fun(x) {
 	console.log(x[3] + x[4]);
 }
fun(numbers);
  // ----------------- //

  

  //Create and name a function with one parameter. Create a for loop and set the length to the parameter's key with the value of the array.* Console.log a sentence for each value.

    //Invoke your function and pass one of your objects

    //*hint: use parameter.length

  function cool(y) {
    for (i = 0; i <= y.length; i++) {
      console.log ("you like " + y[i]);
    }
  }

  cool (slang);

  // ----------------- //

 

  //Create and name a function with one parameters. Create a conditional that checks the first parameter for true or false. If true, console.log a sentence that uses values from the parameter's strings and numbers. Else console.log a sentence that uses different values from the parameter that are strings and numbers.

    //Invoke your function and pass one of your objects


function sup(z) {
  if (z == donut.toppings[0] ){
    console.log("We have found the right donut!")
  } else {
    console.log("this " + donut.filling + " donut is not what im looking for")
  }
}

sup (donut.toppings[0]);