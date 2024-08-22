// for(let i=2; i<=100; i++) {
//     console.log (i);

// }

// let sum= 0;
// for ( let i= 1; i <=5; i++) {
//     sum = sum + i; 
// }

// let  sum = 10; 
// for (let i =1; i <= 5; i++) [
//     console.log (sum)
// ]

// console.log("sum = ", "sum");

// for (let i =1; i <= 5; i++) {
//     console.log ("i = " , i);
// }

// for (let i=1; i<=40; i++) {
//     console.log ("i =" , i)
// }

// let li = [10,20,30,40,50,60,70];
// console.log (li .lastIndexOf(50))

// let are = [10,20,30];
// let arr = [20,30,40];
// console.log (are.concat(arr))

// let arr = ["Sheikh"];
// let arr2 = ["Abdullah"]
// console.log (arr2.concat (arr))
// while (i <=10) {
    //     document.write ("i ");
    // let i =1;
//     i++;
// }


// let sum = 10;
// for (let i= 1; i <=5; i++) {
//     console.log ("sum")
// }

// let num =20; 
// for ( let i=10; i<=15; i++){
//     console.log ("num")
// }

// let sum = 50;
// for (let i= 30; i<=10; i++) {
//     console.log ("sum")
// }


// for (let i = 0 ; i < 10; i++) {
// document.write(i)
    
// }

// let num = 20;
// for (let i=10; i<=15; i++) {
// console.log ("num")
// }

// let game =20;
// for (let i=10; i<=15; i++) {
//     console.log (
//         "game"
//     )
// }

// let num =20; 
// while (num <=30) {
//     console.log (num + "<br>")
//     num++
// }

// let game =20;
// while (game <=30) {
//     console.log (game + "<br>")
//     game++
// }

// let game =50;
// for (let i=30; i<=40; i++) {
//     console.log (
//         game + "<br>"
//     )
// }

// let game = 500; 
// for (let i= 10; i <=20; i++ ) {
//     console.log (game)
// }

// let home = 20;
// for (let i=10; i<=15; i++) {
//     console.log (
//         home + "<br>"
//     )
// }


// let game = 20;
// while (game <=30) {
//     console.log (game +"<br>")
//     game++
// }


// let home = 30;
// for (let i= 20; i<=25; i++) {
//     console.log (
//         home + "<br>"
//     )
// }


// let home =20;
// while (home <=30) {
//     console.log (home + "<br>")
//     home++
// }


// let game =50;
// while (game <=40) {
//     console.log (game + "<br>")
//     game++
// }

// let user = prompt ("Enter Your Table");
// let input = prompt ("Enter Your Length");
// for (i = user; i <input.length ; i++) {
    
// }



// document.write(`${user} x  ${i} = ${user*input.length} `)


// function person (firstName, last, age) {
//     this.firstName = firstName
//     this.lastName = last
//     this.Age = age
// }

// const myFather = new person ("Abdullah", "Sheikh", 19)


// document.getElementById("demo").innerHTML = 
// "My father is " + myFather.firstName 

// function Car (model, year) {
//     this.model = model
//     this.year = year
// }

// let C1 = new Car ("Mustang", 1945)
// let C2 = new Car ("Audi", 1948)

// //add proerty
// Car.prototype.color = "Red"


// // add Method 
// Car.prototype.drive = function () {
//     console.log(`Driving ${this.model}`);
// }

// //display add property using C1 and C2 Objects
// console.log(`${C1.model} color: ${C1.color}`);
// console.log(`${C2.model} color: ${C2.color}`);

// //display add property using C1 and C2 objects 
// C1.drive();
// C2.drive();


// let obj = new Object()

// obj.name = "Sheikh"
// obj.age = "10"
// obj.school = "School"

// let getdiv = document.getElementById("demo")
// for (let key in obj) {
//     getdiv.innerHTML += `${key} : ${obj[key]}`
// }


// let getBtn = document.getElementById("getbtn")
// getBtn.addEventListener("click", () => {
//     for (let key in obj) {
//         delete obj[key]
//     }
//     getdiv.innerHTML = ""
// })




// function Person (first, lastName) {
//     this.FirstName = first
//     this.LastName = lastName
// }


// const myName = new Person ("Sheikh Abdullah", "Ahmed")


// document.getElementById("demo").innerHTML = 
// "My Name is" + myName.FirstName
// let game =20; 




// while (game <=30) {
//     console.log (game)
//     game++
// }

// let hum =30;
// for (let i=20; i<=10; i++ ) {
//     console.log (
//         "hum"
//     )
// }

// let hum =30; 
// for (let i = 20; i<=10; i++ ) {
//     console.log ("hum")
// } 

// let game = 20; 
// while (game <= 30) {
//     console.log (game) 
//     game++
// }

// let game = 20; 
// while (game <= 30) {
//     console.log (game)
//     game ++
// }

// let marks  = {
//     abdullah : 20,
//     sheikh : 20,
//     abdul : 20,
//     hamza : 30
// }
// for (let i = 0; i <Object.keys(marks).length; i++) {
//     console.log ("the marks of " + Object.keys(marks)[i] + "are"  + marks[Object.keys(marks)[i]])
// }


// let marks =  {
//     sheikh : 20,
//     abdullah : 20,
//     sheikh : 30,
//     sheikhabdullah : 40,
// }

// for (let i = 0; i<Object.keys(marks).length; i++) {
//     console.log ("the number of " + Object.keys(marks)[i] + "are " + marks[Object.keys(marks)[i]] )
// }

// let marks  = { 
//     sheikh :20,
//     abdullah: 20,
//     sheikhabdullah : 29,

// }
// for (let key in marks) {
//     console.log ("the marks of " + key + "is" + marks[key])
// }


// for (let i = 0; i < 5; i++) {
//     for (let j = i ; j < 5; i++) {
//         document.write(i + "")
//     }
// }
// // let cn = 43;
// let i 
// while (i != cn) {
//     i = prompt ("enter a number")
//     console.log ("try again")   
// }
// console.log ("you have correct password")


// let game =  20;
// while (game <= 30) {
//     console.log(game)
//     game++
// }




// let hum = 50;
// for (let i = 30; i<=40; i++) {
//     console.log ("apna collage")
// }

// for (let i = 0; i <= 10; i++ ) {
//     console.log ("gamer")
// }

// let game = 30;
// while (game <= 40) {
//     console.log (game)
//     game++
// }

// let game =30;
// for (let i= 50; i<=70; i++) {
//     console.log (game)
// }

// let game =100;
// for ( let i = 100; i<120; i++) {
//     console.log (game)
// }

// let game = 30;
// while (game <= 40) {
//     console.log (game)
//     game++
// }

// let hum = 40;
// while (hum<=50) {
//     console.log (hum )
//     hum++
// }

// let hum = 40; 
// while (hum <= 50) {
//     console.log (hum)
//      hum++
// }
// let hum = 40;
// while (hum <= 50) {
//     console.log (hum)
//     hum++
// }

// let game = "Vice City";
// let result;
// for (let i = 0; i <= 10; i++) {
//     console.log ('a');
// }

// let hum = 40;
// while (hum <= 50) {
//     console.log ( typeof "kkkk")
//     hum++
// }

// let hum = 30;
// while (hum <= 40) {
//     console.log ("Gamer")
//     hum++
// }

// let hum = 30; 
// while (hum <= 40) {
//     console.log ("Gamer")
//     console.log ("hh")
//     console.log ("kkkkk")
//     hum++
// }

// let hum= 30;
// while (hum <= 3) {
//     console.log ("gamer")
//     console.log ("ggg");
//     console.log ("hhh")
//     hum++
// }


// let gameNum = 25; 
// let userNum = prompt ("Gussse The Number ");

// while (userNum != gameNum) {
//     userNum = prompt ("You Wroung number, Gusse Again")
// }

// console.log ("Congulaton ,You Are Win");

// let game = 25;
// let userNum = prompt ('Enteer Your Value')

// while(userNum != game) {
//     userNum = prompt ("Gusse Your Are Wrong")
// }

// console.log ("youare Win")

// let gameNum = 25;
// let userNum = prompt ("Gusse The Numebr");

// while (userNum != gameNum ) {
//     userNum = prompt ("you Wrong number, Gusse Again")
// }
// alert ("Ypu ")

// let gameNum = 25; 
// let userNum = prompt ("You Wrong Number");
// while (userNum != gameNum) {
//     userNum = prompt ("hhhh")
// }
// alert("jjjj")

// let game = 25;
// let userNum = prompt ("you are wrong");
// while(userNum != game) {
//     userNum = prompt ("Sheikh")
// }
// alert("Habibi");



// let game = 20;
// let userNum = prompt ('Enter You  Value')

// while (userNum != game) {
//     userNum = prompt ("Gusses Youur Are Wrong")
// }

// console.log ("your Aer Win");

// let arr = ["Ali", "Sheikh", "Abdul", "Abdullah"];
// let arr2 = ["Expertizo", "Loin", "Samed"];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0 ; j < arr2.length ; j++) {
//         console.log (arr [i] +"" + arr2 [j] + "<br>")
//     }
// }

// let arr = ["Abdul", "Ahmed", "Ali", "Moosa", "Abbdul"];
// let arr2 = ["Expertizo", "Sameed"];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0 ; j < arr2.length ; j++) {
//         console.log (arr[i] + "" + arr2 [j]);
//     }
// }

// let arr = ["Sheikh", "Abdullah", "Ahmed", "Sameed", "Rafay"];
// let arr2 = ["Experitzo", "Don"];
// for (let i =0 ; i <arr.length; i++) {
//     for (let j =0; j < arr2.length ; j++) {
//         console.log (arr[i] + "" + arr2 [j]);
//     }
// }

// let arr = ["Sheikh", "Sheikh Abdullah", "Ahmed", "Laptop"];
// let arr2 = ["Gamer", "Home"];
// for (let i = 0; i <arr.length; i++) {
//     for (let j = 0; j <arr2.length; j++) {
//         console.log (arr[i] + "" + arr2 [j])
//     }

    
// } 

// let arr = ["Aloo", "Tamatar", "Sbzi", "Kheera"];
// let arr2 = ["Laptop", "Computer", "Aloo", "Gahr"];
// for (i = 0; i < arr.length;  i++) {
//     for (let j = 0 ; j < arr2.length; j++) {
//         document.write(arr[i] + "" + arr2[i])
//         document.write("<br>")
//     }
// }
 

// let arr = ["Sheikh", "ABDULLAH", "Sheikh Abdullah", "Gamer"];
// let arr2 = ["Experitzo", "Laptop"];
// for (let i = 0 ; i < arr.length; i++) {
//     for (let j = 0; j < arr2.lengthl; j++) {
//         console.log (arr[i] + "" + arr2[j])
//     }
// }

// let arr = ["SHEIKH", "Abdullah", "Sheikh Abdullah"];
// let arr2 =  ["Home", "House", "Game"];
// for (let i = 0 ; i < arr.length; i++) {
//     for (let j = i ; j< arr2.length; j++ ) {
//         document.write (arr[i] + "" + arr2[i] )
//         document.write ("<br>")
//     }
// }

// let arr = ["Sheikh", "Abdullah", "abdul", "Smeed"];
// let arr2 = ["Expertizo", "Sameed"];
// for (let i =0; i <arr.length ; i++) {
//     for (let j= 0; j <arr2.length; j++) {
//         console.log (arr[i] + "" + arr2 [j])
//     }
// }

// let arr = ["Abdullah", "Sheikh Abdullah", "Abdullah"];
// let arr2 = ["Home", "Abdul", "Sheilh"];

// for (let i = 0; i<=arr.length; i++) {
//     for (let j =i ; j <= arr2.length ; j++) {
//         document.write (arr[i] + "" + arr2 [j])
//         document.write ("<br>")
//     }
// }



// let arr = ["Abdullah", "Ali", "Abdul", "Ahmed", ];
// let arr2 = ["Sameed", "House"];
// for (let i = 0; i < arr .length ; i++) {
//     for (let j = 0; j < arr2 .length ; j++) {
//         console.log (arr [i] + "" + arr2 [j] )
//     }
// }  


// let arr = ["aali", "Abdul", "Abdul", "Ahmed" ];
// let arr2 = ["Ahmesd", "Sun", "Moon"]

// for (let i = 0; i < arr.length ; i++) {
//     for (let j =0; j < arr2 . length ; j++) {
//         console.log (arr [i] + "" + arr2 [j]); 
//     }
// }

// let arr = ["Sheikh ", "Abdullah", "Sheikh", "Abdul", "Sameed", "Gmaer"];
// let arr2 = ["Expertizo", "Gulab"];
// for (let i = 0; i <arr.length; i++) {
//     for (let j = 0; j < arr2 .length; j++) {
//         document.write (arr [i] + ""  + arr2 [j])
//     }
// }







// let arr = ["Ali", "Abdul", "Ahmed", "SUN", "Hmaza"];
// let arr2 = ["HAMZA", "ABDULLAH"];
// for (let i = 0; i < arr.length; i ++) {
//     for (let j = 0; j < arr2.length ; j++) {
//         console.log (arr[i] + "" + arr2[j])
//     }
// }

// for (let i = 1; i <=100 ; i++) {
//     for (let j = i ; j <= i; j++) {
//         console.log (j +'')
//     }
//     console.log (j)
// }

// for (let i = 1; i <= 100; i +=  10) {
//     for (let j = i ; j < i + 10 && j  <= 100;  j++ ) {
//         document.write(j +  "" );
//     }

//     document.write("<br>");
// }

// for (let i = 1; i<=100; i+= 10) {
//     for (let j =i; j < i + 10 && j<= 100; j++) {
//         document.write (j + "");
//     }
//     document.write("<br>")
// }

// for (let i =1; i <= 100; i+= 10 ) {
//     for (let j = i; j < i + 10 && j <=100; j++) {
//         document.write (j +'')
//     }
//     document.write("<br>")
// }

// let arr = ["Ali", "ABDUL", "SHEIKH", "ABDULLAH"];
// let arr2 = ["Abdul", "Car"];
// for (let i =0; i < arr.length ; i++) {
//     for (let j = 0 ; j < arr2 .length ; j++) {
//         console.log (arr[i] + "" + arr2 [j])
//     }
// }

// let arr = ["Ali ", "Sheikh ", "Abdullah", "Ahmed"];
// let arr2 = ["House", "Gamer"]; 

// for (let i =0; i < arr.length ; i++) {
//     for (let j = 0; j < arr2.length ; j++) {
//         document.write (arr [i] + "" + arr2 [i]);
//     }
// }

// let arr = ["Ali", "Sheikh ", "Abdullah", "Sheikh "];
// let arr2 = ["Experitzo", "House", "Ghar" ,"jjj"];
// for (let i = 0; i < arr.length ; i++) {
//     for (let j = 0; j < arr2.length ; j++) {
        
//     }document.write(arr[i] + "" + arr2 [i] )
//     document.write ("<br>")
// }



// let arr = ["Ali", "Sheikh", "Abdullah", "Sheikh Abdullah"];
// let arr2 = ["Sheikh Abdullah", "House"]

// for (let i =0; i < arr.length; i++) {
//     for(let j= 0 ; j <arr2.length ; j++) {
//         document.write(arr[i] + '' + arr2 [i])
//         document.write ("<br>")
//     }
// }

// for (let i = 1; i <= 100; i+= 10) {
//     for (let j = i; j < i + 10 && j <100; j++) {
//         document.write(j + "")
//     }
//     document.write ("<br>")
// }

// for (let i = 1; i <=100; i+= 10) {
//     for (let j = i; j < i + 10 && j < 100; j++) {
//         document.write (j + "")
//     }
//     document.write ("<br>")
// }


// for (let i =1 ; i <= 5; i+= 5) {
//     for (let j = i ; j < i + 5 && j < 5; j++ ) {
//         document.write (j + "")
//     }

    
// }

// for (let i = 1; i <=5; i+= 5 ) {
//     for (let j = i ; j < i && + 5 && j < 5; j++)
//     document.write(j + "")
// }


// for (let i = 5 ; i >= 1; i--) {
//     for (let j = 5; j >= i; j-- ) {
//         document.write(j + "")
//     }
//     document.write("<br>")
// }

// for (let i =1; i <= 5; i++ ){
//     for (let j=1; j<= i; j++) {
//         document.write (j + "" )
//     }
//     document.write("<br>")
// }

// for (let i =0; i <=5; i++) {
//     for (let j = 1; j<= i; j++ ) {
//         document.write(j +"")
//     }
//     document.write ("<br>")
// }

// for (let i = 0 ; i <= 5; i++) {
//     for (let j =1; j <=i; j++) {
//         document.write (j+"")
//     }
//     document.write("<br>")
// }

// for (let i =0; i <= 15; i++) {
//     for (let j = 10; j<=i; j++) {
//         document.write (j + "")
//     }
//     document.write ("<br>")
// }



// for (let i = 5; i >= 1; i--) {
//     for (let j = 5; j >= i ; j--) {
//         document.write (j+ "")
//     }

//     document.write("<br>")
// }
// for (let i =5; i >= 1; i--) {
//     for (let j = 5; j>= i; j--) {
//         document.write (j + "")
//     }

//     document.write ("<br>")
// }

// for (let i =1; i<= 5; i++ ) {
//     for (let j =1; j <= i; j++) {
//         document.write (j + "")
//     }
//     document.write ("<br>")
// } 

// for (let i = 1; i<= 5; i++ ) {
//     for (let j = 1; j <= i ; j++) {
//         document.write (j + "")
//     }
//     document.write ("<br>")
// }



// for (let i =  5; i >= 1; i--) {
//     for (let j = 5; j >= i ; j--) {
//         document.write(j + "")
//     }
//     document.write("<br>")
// }

// for (let i = 5;i >= 1; i--){
//     for (let j =5; j>= i; j-- ) [
//         document.write (j + "")
//     ]
//     document.write ('<br>')
// }
// for (let i = 0; i <= 5; i++) {
//     for (let j = i ; j <= 5; j++) {
//         document.write(i + "")
//     }
    
// }

// for (let i = 5; i >= 1; i--) {
//     for (let j =5; j >= i ; j--) {
//         document.write (j + "")
//     }
//     document.write ("<br>");
// }
// for (let i = 1; i <5; i++) {
//     for (let j = i ; j < 5; j++) {
//         document.write(i + "")
//     }



// }
// for (let i = 1; i<= 5; i++) {
//     for (let j = 1; j<= i; j++) {
//         document.write (j + "")
//     }

//     document.write("<br>")
// }

// for (let i = 5; i>= 1; i-- ) {
//     for (let j = 5; j >= i; j--) {
//         document.write(j)
//     }
//     document.write("<br> ")
// }

// for (let i = 5; i >= 1; i--) {
//     for (let j = 5; j>= i; j--) {
//         document.write(j + "" )
//     }
//     document.write("<br>")
// }




// for (let i= 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++  ) {
//         document.write(j +"")
//     }
//     document.write("<br>")
// }

// for (let num =0; num <=100; num ++) {
//     console.log (num)
// }


// for (let num = 0; num <=100; num++) {
// if (num%2===0)

// console.log (num)
// }

// let obj = {
//     item:"pen",
//     price: 10,

// };


// console.log ("the cost of", obj.item, "is" , obj.price, "rupess" );

// let output = 'the cost of $ {obj.item }'

// for (var i = 5; i >= 1; i--) {
//    for (var j = 5; j >= i; j--) {
//        document.write(j + " ");
//    }
//    document.write("<br>");
// }


// for (var i = 1; i <= 5; i++) {
//    for (var j = 1; j <= i; j++) {
//        document.write(i + " ");
//    }
//    document.write("<br>");
// }


// for (let i =1; i <= 5 ; i++ ) {
//     for (let j = 1; j <= i; j++) {
//         document.write (i + "")
//     }
//     document.write ("<br>")
// }
 

// for(let i =1; i <= 5; i++) {
//     for (let j =1; j <=i; j++) {
//         document.write(i + "")
//     }
//     document.write ("<br>")
// }

// for (let i =1 ; i <= 5; i++) {
//     for (let j =1; j <=i; j++) {
//         document.write ("*" + "")
//     }
//     document.write("<br>")
// }

// for (let i =1; i>=5; i--) {
//     for(let j = 1; j>= i ; j--) {
//         document.write(j + "")
//     }
//     document.write("<br>")
// }


// for (let i = 5; i>=1; i--) {
//     for(let j =5; j>=i;j--) {
//         document.write(j+"")
//     }
//     document.write("<br>")
// }
// f

// or (let i =1; i<=5;i++) {
//     for (let j =1; j<=i; j++) {
//         document.write(i + "")
//     }
//     document.write("<br>")
// }
// for (let i = 5; i>=1; i--) {
//     for (let j = 5; j>=i ;j--){
//         document.write(j + "")
//     }
//     document.write("<br>")


// }


// function factorail (n) {
//     let num = 1
//     for (let i =2; i<=n; i++) {
//         num*=3
//     }
//     return num
// }

// function factorail (n) {
//     let num= 1;
//     for (let i =2; i<= n; i++ ) {
//         num *= 3
//     }
//     return num
// }
// document.write(factorail (3232))


// function factorail (n) {
//     let num = 2
//     for (let i = 2; i<=n; i++) {
//         num *= 3


//     }
//     return num
// }

// console.log(factorail (6));



// for (let i = 5 ; i>= 0; i--) {
//     for (let j = 5; j>= i; j--) {
//         document.write(j  + "")
//     }
//     document.write("<br>")
// }


// let user = prompt("Enrer any value")
// let check  = ""
// for(let i= user.length-1; i>=0 ;i--) {
//     check += user[i]
// }

// if(user == check ) {
//     alert("hellow Wolrld")
// }
// else {
//     alert("CancelWorld")
// }
// console.log (factorail (8))
// let user = prompt("Enter any  word ")
// let check = ''
// for (let i = user.length-1; i>= 0; i --) {
//     check += user[i]
// }
// if(user == check) {
//     alert("word possibale")
// }
// else {
//     alert("word not ")

// }

// let user = prompt("Enter any update value")
// let check = ''
// for (let i = user.length-1; i>= 0 ; i--) {
//     check += user [i]
// }
// if (user == check ) {
//     alert("good")
// }
// else {
//     alert("ungood")

// }



// let user = prompt("Enter any word")
// let check = ''
// for (i = user.length-1; i>= 0; i-- ) {
//     check+= user [i]
// }
// if (user == check) {
//     alert("good")
// }
// else {
//     alert("notgood")
// }


// let user = prompt("Enter any update value")
// let check = ""
// for (let i = user.length-1; i>=  0; i--  ) {
//     check += user
    
//     [i]
// }
// if(user == check ) {
//     alert("good")
// }

// else {
//     alert("ungood")

// }
// f

// or (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write(i+ "")
//     }
//     document.write("<br>")
// }

let user = prompt("Enter Any Value")
let user1 = (Math.ceil(user))
console.log(user1)



// let user = prompt("enter any number")
// let user1 = (Math.ceil(user) )
// console.log (user1) 


// let user = prompt("enter any number")
// let user1 = (Math.ceil(user) )
// console.log (user1) 


// for(let i =0; i<= 10; i++){
//     for (let j = 0; j<= i; j++ ) {
//         document.write("*" + "" )

//     }
//     document.write("<br>")
// }


// for (let i = 5; i>= 1; i-- ) {
//     for (let j= 5; j>=i; j-- ) {
//         document.write( j+ "")
//     }
//     document.write("<br>")

// }
// for (let i =1; i <= 5; i++) {
//     for (let j =1 ; j <= i; j++) {
//         document.write(i + "")
//     }
//     document.write("<br>")
// }

// for (let k = 0 ;k <= 10; k++) {
//     if (k == 5) {
//         continue
//     }
//     document.write(k)
//     document.write("<br>")
// }

