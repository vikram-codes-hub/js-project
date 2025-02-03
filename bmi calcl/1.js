let form=document.querySelector("form")


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const height=parseInt(document.querySelector("#height").value)
    const weight=parseInt(document.querySelector("#weight").value)
    const results=document.querySelector("#results")
    if(height<0||height===""||isNaN(height)){
        results.innerHTML=`Please give a valid height ${height}`
    }else if(weight<0||weight===""||isNaN(weight)){
        results.innerHTML=`Please give a valid height ${weight}`
    }else{
        let heightInM = height / 100;
        
        
        let bmi = weight / (heightInM * heightInM);

 if(bmi<18.6){
    results.innerHTML= `Your BMI is: ${bmi.toFixed(2)} And You are underweight`;
     
 }else  if(18.6<=bmi&&bmi<=24.9){
    results.innerHTML= `Your BMI is: ${bmi.toFixed(2)} And You have normal bmi`;
     
 }else{
    results.innerHTML= `Your BMI is: ${bmi.toFixed(2)} And You are overweight`;

 }

    }
})