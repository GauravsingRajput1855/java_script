console.log("abc");
let sum=0;
for(let i=0;i<=10;i++)
    {
        sum=sum+i;
        console.log("kkk")
    }
    console.log("sum =",sum);
    console.log("loop ended");

    for(let i=0;i<=3;i++)
        {
            console.log("i=",i);
        }
//-------------------------------------------------
        //while
    let j=0;
    while(j<=3)
        {
            console.log("i=",j)
            j++;
        }
//-------------------------------------------------
//do while loop
        let k=20;
        do{
            console.log("while loop")
            k++;
        }while(k<=30);
//-------------------------------------------------
//for of loop
        //this is also an iterator
        //use it for strings and arreys but not for the object 
        let size=0;
        let str="college";
        for(let m of str)
            {
                console.log("i= ",m);
                size++;
            }
        console.log("string size =",size);
//-------------------------------------------------
//for in loop
            //more useful to print object
        let student=
        {
            name:"zzzzz",
            age:20,
            cgpa:9.9,
            isPass:true
        };
        for(let key in student)
            {
                console.log(key);
                console.log("value",student[key]);
            }
//-------------------------------------------------
//practice question no 1
            //print even no from 1 to 100
        for( num=0;num<=10;num++)
            {
                if(num%2==0)
                    {
                        console.log("num =",num)
                    }
            }
//-------------------------------------------------
//guess the number 
        let gameNum=25;
        let userNum=prompt("guess the game number no");
        console.log(userNum);
        while(userNum!=gameNum)
            {
               userNum= prompt("wrong no guess again");
            }
        console.log("congratulations u enter right no ");