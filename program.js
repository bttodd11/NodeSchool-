// Example 1
// console.log("hello");

// Example 2
// var example = "some string";
// console.log(example);

// Example 3
// var someString = "this is a string";
// console.log(someString);

// Example 4
// var example = "example string";
// console.log(example.length);

// Example 5
// var pizza = "pizza is alright";
// pizza = pizza.replace("alright","wonderful");
// console.log(pizza);

//Example 6
// var example = 123456789;
// console.log(example);

//Example 7
// var roundUp = 1.5;
// rounded = Math.round(roundUp);
// console.log(rounded);

//Example 8
// var n = 128;
// n.toString();
// console.log(n);

//Example 9
// var fruit = "orange";
// if(fruit.length > 5){
//   console.log("The fruit name has more than five characters.");
// }
// else {
//   console.log("The fruit name has five characters or less.");
// }

// Example 10
// var total = 0;
// var limit = 10;
// for (var i = 0; i < 10; i++){
//   total += i;
// }
// console.log(total);

// //Example 11
// var pizzaToppings = [
//   'tomato sauce',
//   'cheese',
//   'pepperoni'
// ]
//  console.log(pizzaToppings)

//Example 12
// var numbers = [1,2,3,4,5,6,7,8,9,10]
// var filtered = numbers.filter(function evenNumbers(number){
//   return number % 2 === 0;
// })
// console.log(filtered)

//Example 13
// var food = ['apple', 'pizza', 'pear']
// console.log(food[1]);

//Example14
// var pets = ['cat','dog','rat']
// for (var i = 0; i < pets.length; i++)
//  pets[i] = pets[i] + 's'
// console.log(pets);

//Example 14
// var pizza ={
//   toppings: ['cheese','sauce','pepperoni'],
//   crust: 'deep dish',
//   serves: 2
// }
// console.log(pizza);

//Example15
// var food = {
//   types: 'only pizza'
// }
// console.log(food['types']);

//Example 16
// function eat(food){
//   return food + ' tasted really good.'
// }
// console.log(eat('bananas'));

//Example17
// function math(a,b,c){
//   return b * c + a
// }
// console.log(math(53,61,67));

//Example 18
var a = 1, b = 2, c = 3;

     (function firstFunction(){
         var b = 5, c = 6;

         (function secondFunction(){
             var b = 8;

             (function thirdFunction(){
                 var a = 7, c = 9;

                 (function fourthFunction(){
                     var a = 1, c = 8;

                 })();
             })();
         })();
     })();
console.log("a: "+a+", b: "+c+",c: "+c);
