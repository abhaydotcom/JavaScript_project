const main=document.querySelector(".main");
setInterval( ()=>{
const date=new Date();

main.innerHTML=date.toLocaleTimeString();

},1000  )