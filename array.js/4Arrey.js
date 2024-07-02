let marks=[1,2,3,4,5,6];
console.log(marks);
console.log(marks.length);
console.log(typeof(marks));

//---------------------------------------------------
//array indices
    //we can chager the integer vaslue but not string vaslue because string is immutable but integers are mutable
console.log(marks[0]);
//to change data
console.log(marks[0]=9);
console.log(marks);

//---------------------------------------------------
//loops in arret
for(let i=0;i<marks.length;i++)
    {
        console.log(marks[i]);

    }
//for off in arrey
let cities=["manali","karachi","kabul","istanbul"];
for(let city of cities)
    {
        //note here we use city to print not cities
        console.log(city.toUpperCase());
    }
//---------------------------------------------------
//practice question (find avarage marks of studentys)
let sum=0;
for(let val of marks)
    {
        sum=sum+val;
    }
    let avg =sum/marks.length;
    console.log(`avg marks of the class = ${avg}`);

//---------------------------------------------------
//practice question
//apply offer of 10 % on each item
let items=[200,300,400,500,600];
let i=0;
for(let valu of items)
    {
        console.log(`value of index ${i} = ${valu}`)
        let offer=valu/10;
        items[i]=items[i]-offer;
        console.log(`value of offer= ${items[i]}`);
        i++;
    }
//---------------------------------------------------
//push in arrey
    let foodItems=["potato","apple","ilaiche","tomato"  ];
    console.log(foodItems);
    foodItems.push("mango","apple");
    console.log(foodItems);
//pop in arrey
    foodItems.pop();
    console.log(foodItems);
    let deletedItem=foodItems.pop();
    console.log(foodItems);
    console.log("deleted",deletedItem);

//to string
    console.log(foodItems.toString());

//concating two arreys
let marvel=["thor ","ironman ","dr-strange","hulk"];
let dc=["batman","superman"];
let inh=["shaktiman","krish"]
let heros=marvel.concat(dc,inh);
console.log(heros);
//.shift function
let val=marvel.shift();
console.log("deleted",val);


//slice(),splice() in arrey 
//it wont change in original arrey
console.log(marvel.slice(1,3));
 //.splice 
 //to add
 let arr=[1,2,3,4,5,6,7,8,9,10];
 arr.splice(2,0,100);
//2 index 0 zero delete 100 replace

//to delete
arr.splice(3,1,101);
// 3 index 1 delate 101 add at 3