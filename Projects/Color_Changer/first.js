// function dateMethods() {
//     const currentDate = new Date();
//     console.log("Current Date:", currentDate);
  
//     // Getting various components of the date
//     console.log("Date:", currentDate.getDate());
//     console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
//     console.log("Year:", currentDate.getFullYear());
//     console.log("Hours:", currentDate.getHours());
//     console.log("Minutes:", currentDate.getMinutes());
//     console.log("Seconds:", currentDate.getSeconds());
  
//     // Setting components of the date
//     currentDate.setFullYear(2022);
//     console.log("After setFullYear:", currentDate);
  
//     currentDate.setMonth(5); // Setting month to June (zero-indexed)
//     console.log("After setMonth:", currentDate);
  
//     // Getting and setting time in milliseconds since 1970
//     console.log("Time in milliseconds since 1970:", currentDate.getTime());
  
//     const newDate = new Date(2023, 8, 15); // Creating a new date
//     console.log("New Date:", newDate);
//   }
  
//   // Example Usage for Date Methods
//   dateMethods();

// let arr=[1,2,3,4,5];
// let n=arr.slice(2,4);
// let n1=arr.splice(2,4);
// console.log(n);
// console.log(n1);
// console.log(arr);




// console.log(Object.values(JsUser));
// console.log(JsUser.age)
// console.log(JsUser["full name"]);
// JsUser.isLogin="false"; 
// console.log(JsUser.isLogin);
// console.log(JsUser)

// JsUser.age="83";
// console.log(JsUser)

// const user=new Object();
// user.name="Abhay Kumar singh";
// user.age="20";

// const a={1:"a",2:"b"};
// const b={3:"z",4:"x"};
// delete b[4]
// const us=Object.assign(a,b);
// console.log(us);

// const user={
//     name:"abhay",
//     age:"20",
//     Profession:"Student",
// }

// function handleObj(input){

//     console.log(`Name is: ${input.name} age is:${input.age} proffession is:${input.Profession}`);
//  }
//  handleObj(user);

// function a(){
//     const user="abhay";
//     function b(){
//         const user2="apple";
//         console.log(user);
        
//     } 
    
//     b();
// }
// a();

// let ab=(n1,n2)=>{return n1+n2};
// console.log(ab(1,5));


// let num1=2;
// let num2=5;
// let key='-';
// switch (key) {
//     case '+':
//       console.log("Sum is:" ,num1 +num2 );  
//         break;
//         case "-":
//             console.log("Sub is: ",num1-num2 );
//             break;

//     default:
//         console.log("Invaild");
//         break;
// }

// const arr="abhay";
// for(let val of arr){
//     console.log(val)
// }
// const map=new Map()
// map.set('in',"India")
// map.set('Dubai',"Abu Dhabi")
// map.set('Us',"Usa")
// for(let [keys,obj] of map){
//     console.log([keys,obj]);
// }


// let JsUser={
//     name:"Abhay",
//     "full name":"Abhay kumar singh",
//     age:"20",
//     location:"Delhi",
//     isLogin:"true",
//     lastLogin:["mon","tuesday","wed"],

// }
// for(let key in JsUser){
//     console.log(`${key} of Object is: ${JsUser[key]}`)
// }



// let ab=["abhay","avy","aarav","avnsih"]
// for(let val in ab){
//     console.log(ab[val]);
// }
// ab.forEach(function (items){console.log(items)})

// ab.forEach((val)=>{
//     console.log(val);
    
// })

// let user=[
//     {
//         Name: 'Abhay',
//         Age:'20',
//     },
//     {
//         Name: 'Anuj',
//         Age:'16',
//     },
//     {
//         Name: 'avnish',
//         Age:'12',
//     }
// ]
// let a=user.forEach( (val) => { console.log(val);
//     return val;
//   })

// let num=[1,2,3,4,5,6,7,8,9]

// let user=num.filter( (val)=>{return  val>2} )
// console.log(user)
// let total=num.reduce( (prev,cur) =>{console.log("Prev value:",prev,"Current value: ",cur)
//     return prev+cur;
// }   )
// console.log(total)
// document.querySelectorAll("h2").style.backgroundColor="red"; 

const button=document.querySelectorAll(".button");
const body=document.querySelector("body");
button.forEach( (val) => {
val.addEventListener('click', (e)=>{
    console.log(e);
    console.log(e.target)
    if(e.target.id==='red'){
        body.style.backgroundColor="red"
    }
    if(e.target.id==='green'){
        body.style.backgroundColor="green"
    }if(e.target.id==='blue'){
        body.style.backgroundColor="blue"
    }
    if(e.target.id==='yellow'){
        body.style.backgroundColor="yellow"
    }

});
} );