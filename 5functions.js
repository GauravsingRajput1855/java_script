function myFunction() {
  console.log("welcome");
  console.log("aa gaye tamasha dekhne");
}
myFunction();

function myFunction2(msg, n) {
  //parameter ->input
  console.log(msg, n);
}

myFunction2("dekh hota ky print", 11); //argument
function sum(x, y) {
  console.log(x + y);
}
sum(2, 3);
//sum finction arrow version
const arrowsum = (a, b) => {
  console.log(a + b);
};
arrowsum(8, 6);
//---------------------------------------------------
//practice question
//count vowels
function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char == "a" ||
      char == "i" ||
      char == "o" ||
      char == "e" ||
      char == "u"
    ) {
      count++;
    }
  }
  console.log(count);
}
//same in arrow function

const countVow = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char == "a" ||
      char == "i" ||
      char == "o" ||
      char == "e" ||
      char == "u"
    ) {
      count++;
    }
  }
  console.log(count);
};
//---------------------------------------------------

//higher order function in java script are  take another function in parameter or they return another function as output
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printval(
  val //callbackFunctions
) {
  console.log(val);
});
//same in arrow function
arr.forEach((val, indx, arr) => {
  console.log(val, indx, arr); //.toUpperCase use for uppercase value in string arrey
});
//---------------------------------------------------

//practice question
    //print the square of each using forEach loop
    let nums=[2,3,4,5,6];
    nums.forEach((num)=>{
        console.log(num*num);
    });
    //or
    let calSquare=(nums)=>
        {
            console.log(nums*nums);
        }
    nums.forEach(calSquare);

//---------------------------------------------------
//maps
//map creates a new arrey with the result of some operations .the value its callBack returns are used to form new arrey
        nums.map((val)=>{
            console.log("using maps "+val);
        });

        //to copy the arrey in map
        let newArr=nums.map((val)=>{
            return val;
        });
        console.log("new arr = "+newArr);

 //-------------------------------------------------
 //filter
    //it creates a new array of elements that give true for a condition/filter eh: all even elements
    let evenArr=arr.filter((val)=>{
        return val%2==0;//val!=0 or val>3 or etc;
    });
    console.log(evenArr);
//---------------------------------------------------
//reduce
//perform some operations & reduce the arrey to a single value. it return the single value
const initilixeValue=0;
const output=arr.reduce((result,current)=>{
    return result+current;
});
console.log(output);
//for largest no 
const output2=arr.reduce((previous,current)=>{
    return previous>current? previous:current;
});
console.log(output2);