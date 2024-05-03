let carApply =document.querySelector(".car-sec1")
let carRenew =document.querySelector(".car-sec2")
let apply_form=document.querySelector("#apply-form")

carApply.addEventListener("click",function(){
    apply_form.style.visibility="visible"
})

carRenew.addEventListener("click",function(){
    apply_form.style.visibility="visible"
})
///////////////////////////////////////////////////////////////

let submit=document.querySelector(".sub")


submit.addEventListener("click" ,function(e){
    localStorage.setItem("Request File",apply_form.value)
})


let emplyee = document.querySelector("#employee")

emplyee.addEventListener("click",function(){
    setTimeout(()=>{
        window.location = "employee.html"
    },1500)
})
///////////////////////////////////////////////////////////////
