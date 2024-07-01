//-------------------------------------------------
//types of way to create the strings
//you can use single as well as double quotes
let str="college";
let str2='college'
// .length is use to auto count the length
console.log(str.length);

// to accsss the single character in js
console.log(str[4]);

//-------------------------------------------------

//template literals
let specialString=`this is a template llitral`;
console.log(typeof specialString);

// whats the use of backtick literals in js lets understand
let obj={
    item:"pen",
    price:10,
};
//if we print with normal quotes we need small pices like
console.log("the cost of",obj.item," is ",obj.price,"rupee");

let specialQuotes=`the cost of ${obj.item} is ${obj.price} rupee`;
console.log(specialQuotes);
let spec=`this is special string ${1+2+3}`;

//-------------------------------------------------
//ecvape character \n to print in next line
console.log("app\ndata");
// \t for the tab space 
let esc ="application \t data";
console.log(esc.length);

//-------------------------------------------------
//string methode in java
//strings are immutable in js 
//original strings are as it is toUpperCase return new value
let toupper="abcdefg";
console.log(toupper.toUpperCase());

//.trim (method )
//it remove the white spaces from start and end
let trims="  app data bata tata ";
console.log(trims.trim());

//.slice (method)
    //end value is non inclusive 
let slc="abcde";
console.log(slc.slice(1,3));

//.concat
    //it will concat string 1 and string 2
    let st1="app";
    let st2="daaaaata";
    console.log(st1.concat(st2));
    //or
    let con="a m finding "+st1+st2;
    console.log(con);

//reoplace
    console.log(st1.replace("a","m"));
//replaceall
    console.log(st2.replaceAll("a","b"));
//charAt
    console.log(st1.charAt(2));

//-------------------------------------------------

//practice question enter username from user add @ and length 
let fullName=prompt("enter your full name without spaces");
let userName="@"+fullName+fullName.length;
console.log(userName);


//For more exploration of string use mdn website