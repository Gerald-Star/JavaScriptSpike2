/* 1. Appending Variables to Strings
Just as we can build a string over multiple lines out 
of string literals, we can also 
append variables to a 
string using the plus equals (+=) operator.

Example:
*/
const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
console.log(ourStr);

const someAdjective = "Not Easy";
let myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr);



/*2. Finding the Length of a String

You can find the length of a String value 
by writing .length after the string variable or string literal.*/

console.log("Alan Peter".length);

/*The value 10 would be displayed in the console.
 Note that the space character between "Alan" and "Peter" 
 is also counted.

For example, if we created a variable const 
firstName = "Ada", we could find out how long 
the string Ada is by using the firstName.length property.

*/

console.log("Ada".length);


//Example
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
console.log(lastName.length);

let str1 = "Hello";
const length1 = str1.length; // This returns 5
console.log(str1.length);




/* 3. Use Bracket Notation 

To Find the First Character in a String

Bracket notation is a way to get a character at a specific
index within a string.

Most modern programming languages, like JavaScript, don't 
start counting at 1 like humans do. They start at 0. 
This is referred to as Zero-based indexing.

For example 1, the character at index 0 in the word Charles is C. So if const firstName = "Charles", you can get the value of the first letter of the string by using firstName[0].

*/
const firstName = "Charles";
const firstLetter = firstName[0];
console.log(firstName[0]);
//firstLetter would have a value of the string C.

//Example 2

let firstLetterOfLastName = "";
const lastNameLetter = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastNameLetter[0]; // Change this line
console.log(lastNameLetter[0]);

//Exampßle 3

let secondLetterOfLastName = "";
const secondNameLetter = "Lovelace";

secondLetterOfLastName = secondNameLetter[1];
console.log(secondNameLetter[1]);


/* 4. Use Bracket Notation to Find the Nth Character in a String
You can also use bracket notation to get the character at 
other positions within a string.

Remember that computers start counting at 0, 
so the first character is actually the zeroth character.

Example: 1*/

const firstNameBraNotation = "Ada";
const secondLetterOfFirstName = firstNameBraNotation[1];
//secondLetterOfFirstName would have a value of the string d

console.log(firstNameBraNotation[1]);


//Example 2
const lastNameBraNotation = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastNameBraNotation[2]
console.log(lastNameBraNotation[2]);


/* 5 Use Bracket Notation to Find the Last Character 
in a String
In order to get the last letter of a string, 
you can subtract one from the string's length.

For example, if const firstName = "Ada", 
you can get the value of the last letter of the string
 by using firstName[firstName.length - 1].

Example 1:*/

const myfirstName = "Ada";
const lastLetter = myfirstName[myfirstName.length - 1];
console.log(lastLetter);
//lastLetter would have a value of the string a 


// Example 2

const mylastName = "Lovelace";

// Only change code below this line
const lastLetterLastName = mylastName[mylastName.length-2]; // Change this line
console.log(lastLetterLastName);


/* 6 Use Bracket Notation to Find 
the Nth-to-Last Character in a String */

const urfirstName = "Augusta";
const urForfirstName = urfirstName[urfirstName.length - 3];
console.log(urForfirstName);





/*6. Understand String Immutability

In JavaScript, String values are immutable, 
which means that they cannot be altered once created.

For example, the following code:*/

let myString = "Bob";
myString[0] = "J";

//cannot change the value of myStr to Job, 
//because the contents of myStr cannot be altered. 
/*Note that this does not mean that myStr cannot be changed, 
just that the individual characters of a string 
literal cannot be changed. 

The only way to change myStr would be to assign it 
with a new string, like this:*/

let myStringAssign = "Bob";
myStringAssign = "Job";


console.log(myStringAssign);


//Example 2

let myStrChange = "Jello World";

// Only change code below this line
myStrChange[0] = "H"; // Change this line
myStrChange = "Hello World"


console.log(myStrChange);


/* 7. Store Multiple Values in one Variable using JavaScript Arrays
With JavaScript array variables, we can store several pieces of data in one place.

You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:
*/
const sandwich = ["peanut butter", "jelly", "bread"];
console.log(sandwich);

// Storing multiple Array with number

const bread = ["floor", "butter", 5];
console.log(bread);


/* 8. Nest one Array within Another Array
You can also nest arrays within other arrays, like below:

*/
const teams = [["Bulls", 23], ["White Sox", 45]];
console.log(teams);

//This is also called a multi-dimensional array.

//Example 2
const euroTeam = [["Man U, 2"], ["Arsenal, 3"]];
console.log(euroTeam);


/* Access Array Data with Indexes
We can access the data inside arrays using indexes.

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has an index of 0.


Example 1*/

const array = [50, 60, 70];
console.log(array[0]);
console.log(array[1]);

//The console.log(array[0]) prints 50,
// and data has the value 60.


//Example 2

/*The first element of an array is at position zero.
 So, if you want to access the first element of an array,
  you can do it like so: */

const arr = ["Programming", 123, "Coding", 789];

const firstElem = arr[0]; // This is "Programming"
const thirdElem = arr[2]; // This is "Coding"
const fourthElem = arr[3]; // This is 789

//console.log(firstElem, thirdElem, fourthElem); any of this goes.
console.log(arr[0], arr[2], arr[3]);


//Example 3

const myArray = [50, 60, 70];
const myData = myArray[2];
console.log(myArray[2]); 
// could console myData, this prints 70.


/* How To Modify Array Data With Indexes
This changes the array by removing the original array 
and putting a new one.

Unlike strings, the entries of arrays are
mutable and can be changed freely, 
even if the array was declared with const.

Example 1 */

const ourArray = [50, 40, 30];
ourArray[2] = 15;
console.log(ourArray[2] = 15);
// output: ourArray now has the value [15, 40, 30].

//Note: There shouldn't be any spaces between the 
//array name and the square brackets, like array [0]


const modifyMyArray = [18, 64, 99];
modifyMyArray[0] = 45;
console.log(modifyMyArray[0]);


/* How To Access Multi-Dimensional Arrays With Indexes
One way to think of a multi-dimensional array, 
is as an array of arrays. When you use brackets 
to access your array, the first set of brackets 
refers to the entries in the outer-most 
(the first level) array, and each additional 
pair of brackets refers to the next level of entries inside.

Example 1 */

const myArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

myArr[3];
myArr[3][0];
myArr[3][0][1];

myArr[3] [[10, 11, 12], 13, 14], 
myArr[3][0]  [10, 11, 12], 
myArr[3][0][1]  [11];

console.log(myArr[3],
    myArr[3][0],
    myArr[3][0][1]);


    /* Using bracket notation select an 
    element from myModifyArray such that myData is equal to 8.*/

    const myModifyArray = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [[10, 11, 12], 13, 14],
      ];
      
      const myModifyData = myModifyArray[2][1];
      console.log(myModifyArray[2][1]);


/*  Manipulate Array Function Methods
  1. .push() function method

An easy way to append data to the end 
of an array is via the .push() function.

.push() takes one or more parameters and 
"pushes" them onto the end of the array.

Examples:1 */

const arr1 = [1, 2, 3];
const arrPush = arr1.push(4);
console.log(arr1); // cross check

// Example 2

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
// output arr1 now has the value [1, 2, 3, 4] 
// output arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]].
console.log(arr2); // cross check

// Example 2, Push ["dog", 3] onto the end of the myArray variable.
            //another format of writing with const

const myPushArray = [["John", 23], ["cat", 2]];
const pushArray = myPushArray.push(["dog", 3]); //cross check
console.log(myPushArray);


/* Array pop()function
        .pop() 

        */
        const threeArr = [1, 4, 6];
        const oneDown = threeArr.pop(6);
        console.log(oneDown);
        console.log(threeArr);


//The first console.log will display the value 6, 
//and the second will display the value [1, 4]




