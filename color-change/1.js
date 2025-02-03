let buttons=document.querySelectorAll(".button")
let body=document.querySelector("body")

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click',(e)=>{
        console.log(e)
        console.log(e.target)
        if(e.target.id==="grey"){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==="purple"){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==="blue"){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==="yellow"){
            body.style.backgroundColor=e.target.id
        }
    })
    
})