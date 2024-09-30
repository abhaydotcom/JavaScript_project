const form=document.querySelector('form');

form.addEventListener('submit', (e)=>{

    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector("#weight").value);
    const result=document.querySelector(".result");
    const update=document.querySelector(".res");

    if(height==="" || height<0||isNaN(height) ){
        result.innerHTML=`Please Give us a valid Number ${height}`
    }else if(weight==="" || weight<0|| isNaN(weight)){
        result.innerHTML=`Please Give us a valid number ${weight}`
    }else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        
        if(bmi<18.6){
            update.innerHTML=`You are UnderWeight Beacuse Your Bmi is ${bmi}`
        }else if(bmi>18.6 && bmi<24.6){
            update.innerHTML=`You are Healthy Because your Bmi is${bmi}kg/m`
        }else if(bmi>24.6){
            update.innerHTML=`You are Overweight Because Your Bmi is ${bmi}kg/m` 
        
        }
    }
    

})


