// let btn=document.createElement('button');
// const body=document.querySelector('body');
// const div=document.querySelector("#div1");
// div.append(btn);
// btn.innerHTML="Dark Mode";

// let darkMode="lightMode";

// btn.addEventListener('click', ()=>{
//     if(darkMode=="lightMode"){
//         body.style.backgroundColor="white";
//         body.style.color="black";
//         darkMode="darkMode";
//         btn.innerHTML="Dark mode"

//     }else{
//         body.style.backgroundColor="black";
//         body.style.color="white";
//         darkMode="lightMode"
//         btn.innerHTML="Light Mode"

//     }



// })

let a=document.getElementById("div1");
// a.outerHTML="<div><h>I am writing this through javascript OuterHTML method </p></div>";
a.innerHTML="<p>Abhay kumar singh</p>";

let btn=document.getElementById("btn");
setTimeout(()=>{
    a.innerHTML="This is changed through set timeout function"
},3000)


