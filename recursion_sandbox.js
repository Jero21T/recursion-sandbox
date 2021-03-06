
//COUNTDOWN

function countdown(n){
  if (n===0){
    return;
  }
  console.log(n);
  countdown(n-1);
}

//console.log(countdown(10))

//DATA STRUCTURE

var broccoli2 = {
  size: 5,
  children: [{
      size: 4,
      children: [{
          size: 3,
          children: [{
              size: 2,
              children: [{
                  size: 1,
                  children: []
                },
                {
                  size: 1,
                  children: []
                },
                {
                  size: 1,
                  children: []
                }





              ]
            },
            {
              size: 2,
              children: [{
                  size: 1,
                  children: []
                },
                {
                  size: 1,
                  children: []
                },
                {
                  size: 1,
                  children: []
                }




              ]
            }
          ]
        },
        {
          size: 3,
          children: [{
              size: 2,
              children: [{
                  size: 1,
                  children: []
                },
                {
                  size: 1,
                  children: []
                },
                {
                  size: 1,
                  children: []
                }




              ]
            },
            {
              size: 2,
              children: [{
                  size: 1,
                  children: []
                },
                {
                  size: 1,
                  children: []
                },
                {
                  size: 1,
                  children: []
                }



              ]
            }


          ]
        }
      ]
    },
    {
      size: 4,
      children: [{
          size: 3,
          children: [{
              size: 2,
              children: [{
                  size: 1,
                  children: []
                },
                {
                  size: 1,
                  children: []
                },
                {
                  size: 1,
                  children: []
                }



              ]
            },
            {
              size: 2,
              children: [{
                  size: 1,
                  children: []
                },
                {
                  size: 1,
                  children: []
                },
                {
                  size: 1,
                  children: []
                }


              ]
            }



          ]
        },
        {
          size: 3,
          children: [{
              size: 2,
              children: [

                {
                  size: 1,
                  children: []
                },
                {
                  size: 1,
                  children: []
                },
                {
                  size: 1,
                  children: []
                }



              ]
            },
            {
              size: 2,
              children: [{
                  size: 1,
                  children: []
                },
                {
                  size: 1,
                  children: []
                },
                {
                  size: 1,
                  children: []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};


//EAT BROCCOLI 
var eatYourBroccoli = function(broccoli2){
  broccoli2.children.forEach(function(smallerbrox){
    console.log('I ate a brox of size: '+smallerbrox.size);
    eatYourBroccoli(smallerbrox);
  })
}

//console.log(eatYourBroccoli(broccoli2));




//COUNT BROCCOLI

var countYourBroccoli = function(broccoli2){
  //base case
if (broccoli2.children.length===0){
  return 1;
}

var count = 0;
for (var i=0;i<broccoli2.children.length;i++){
  count+=countYourBroccoli(broccoli2.children[i])
}

return 1+count
}

// GET ELEMENTS BY CLASSNAME

var getElementsByClassName = function(className){

var elements=[];

 var traverseDom = function(node){

  if (node.classList.contains(className)){
  elements.push(node)
}

if (node.children.length !==0){

for (var i=0;i<node.children.length;i++){
  traverseDom(node.children[i]);
}
 }
 };

 traverseDom(document.body)

 return elements;

}



//######### EXAMPLE 1 #################/
// Implement function countDecrementing that takes a number `n` and logs numbers n to 0
var countDown = function(n){
  if (n===0){
    return 0;
  }

  console.log(n)
  return countDown(n-1)
}

//console.log(countDown(10));

//######### EXAMPLE 2 #################/
// Implement function countIncrementing that takes a number `n` and logs numbers 0 to n
var countUp = function(n){
if (n>=0){
  countUp(n-1);
  console.log(n);
}

}

//console.log(countUp(10))



//######### EXAMPLE 3 #################/
// Implement function sum that takes a number `n` and returns the sum of numbers 0 through n
var sum = function(n){
	if (n===0){
		return 0;
	}

	return n+sum(n-1);
}

//console.log(10)

//######### EXAMPLE 4 #################/
// Implement function exponent that takes a base and exponent and returns base to the power of expo 
var mathPower = function(base,exponent){
	if (exponent===0){
		return 1;
	}

return base*mathPower(base,exponent-1);
}

//console.log(mathPower(2,4))

//######### EXAMPLE 5 #################/
// Implement function factorial that takes a number n and returns the factorial of n

var factorial = function(n){
	if (n===0){
		return 1;
	}

	return n*factorial(n-1)
}

//console.log(factorial(4))

//######### EXAMPLE 6 #################/
/********************************************************************************************/
// Implement function reverseString that takes a string and returns a reversed version of the string
//the old fashioned way


var reverseString = function(string){
	if (string.length===0){
		return '';
	}

	return string[string.length-1]+reverseString(string.substring(0,string.length-1))
}

//console.log(reverseString('jeroen is cool')==='looc si neorej')

//######### EXAMPLE 8 #################

// Implement a recursive function called copy that takes an array of arrays made of either [number, array] or [number, null]
// return the number of arrays including the given array
// Example: [100, [200, [300, [400, null]]]] returns 4"

var copy = function(array){
	var count=1
	array.forEach(function(subarr){
		if (Array.isArray(subarr)){
			count+=copy(subarr)
		}
	})

	return count

}

//console.log(copy([100, [200, [300, [400, null]]]]))



/** REQUIRED EXERCISES (1-20) **/


// 1.(DONE) Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120

var factorial = function(n) {
if (n===0){
  return 1;
}
  return n*factorial(n-1);
};

// var assertEqual = function(actual,expected,testName){
//   if (actual===expected){
//     console.log('passed')
//   }else{
//   console.log('FAILED: '+testName+' expected '+expected+' but got, '+actual)
// }
// }

// 2.(DONE) Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length===0){
    return 0;
  }

  return array[array.length-1]+sum(array.slice(0,array.length-1))
};


// 3.(DONE) Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var total = 0
  array.forEach(function(el){
    if (Array.isArray(el)){
      total+=arraySum(el)
    }else{
      total+=el
    }
  })

  return total
};



// 4.(DONE) Check if a number is even.
var isEven = function(n) {
 if (n===0){
  return true;
 }

 if (n%n){
  return isEven(n-1)
 }else{
  return !isEven(n-1)
 }
};

//console.log(isEven(11))


// 5.(DONE) Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n===0){
    return 0;
  }

  return n-1+sumBelow(n-1)
};

//console.log(sumBelow(7))

// 6. (DONE) Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if (y===x+1){
    return [];
  }

  return [x+1].concat(range(x+1,y))
};

// console.log(range(2,9))
// console.log(range(1,7))

// 7. (DONE) Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp===0){
    return 1;
  }

  return base*exponent(base,exp-1)
};

//assertEqual(exponent(4,3),64,'check if correct')

// 8.(NOT DONE) Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

var powerOfTwo = function(n) {
  if (n===1){
    return true;
  }

  if(Math.sqrt(n)%2===0){
    return powerOfTwo(n-1)
  }else{
    return !powerOfTwo(n-1)
  }
};

console.log(powerOfTwo(3))

// 9.(DONE) Write a function that reverses a string.
var reverse = function(string) {
  if (string.length===0){
    return '';
  }

  return string.charAt(string.length-1)+reverse(string.substring(0,string.length-1))
};

//assertEqual(reverse('jeroen'),'neorej','test')

// 10. (DONE) Write a function that determines if a string is a palindrome.

var palindrome = function(string) {
  if (string.length===0){
    return true;
  }

if (string.charAt(0)===string.charAt(string.length-1)){
  return palindrome(string.slice(1,string.length-1))
}else{
  return !palindrome(string.slice(1,string.length-1))
}


};


// 11.(NOT DONE) Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12.(DONE) Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (y===0){
    return 0;
  }

  return x+multiply(x,y-1);
};

//console.log(multiply(3,3))

//assertEqual(multiply(3,3),9,'test')

// 13.(DONE) Write a function that divides two numbers without using the / operator or
// Math methods.
var divide = function(x, y) {
if (x===0){
  return 0;
}
return 1+divide(x-y,y)
};

//assertEqual(divide(100,2),50,'test')

// 14.(NOT DONE) Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {

};

// 15. (DONE) Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
if (str1.length===0){
  return true;
}

if (str1.charAt(0)===str2.charAt(0)){
  return compareStr(str1.substring(1),str2.substring(1))
}else{
  return !compareStr(str1.substring(1),str2.substring(1))
}
};

//compareStr('Sano','Samo') --> false
// compareStr('ano','amo') --> false
// compareStr('no','mo') --> false
// !compareStr('o','o') --> false
// compareStr('','') --> true
// true



// console.log(compareStr('jero','jero'))


// 16. (DONE) Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length===0){
    return [];
  }

return [str.charAt(0)].concat(createArray(str.slice(1,str.length)))
};

//console.log(createArray('jeroen'))

// 17.(DONE) Reverse the order of an array
var reverseArr = function(array){
//basecase
if (array.length===0){
  return [];
}
//recursivecase
return [array[array.length-1]].concat(reverseArr(array.slice(0,array.length-1)))

};

//console.log(JSON.stringify(reverseArr([1,2,3]))===JSON.stringify([3,2,1]))

// 18.(DONE) Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length===0){
    return [];
  }

  return [value].concat(buildList(value,length-1))
};

//console.log(buildList(7,7))


// 19.(NOT DONE) Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {






};

// 20.(DONE) Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length===0){
    return 0;
  }

  if (array[0]===value){
    return 1+countOccurrence((array.slice(1)),value);
  }else{
    return countOccurrence((array.slice(1)),value);
  }
};

 // console.log(countOccurrence([2,7,4,4,1,4], 4))
 // console.log(countOccurrence([2,'banana',4,4,1,'banana'], 'banana'))


/** OPTIONAL EXERCISES (21-40) **/


// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
























