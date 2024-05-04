let links=document.querySelector("#links")
let emplyeeInfo = document.querySelector("#em-info")
let employee = document.querySelector("#employee")
let leftHeaderImg=document.querySelector("#lSide-Img")
let leftHeaderText=document.querySelector("#lSide-Text")


if(localStorage.getItem("UserName")){
    links.remove()
    emplyeeInfo.style.visibility="visible"
    employee.innerHTML = localStorage.getItem("UserName")
    emplyeeInfo.style.display="flex"
    leftHeaderImg.style.marginTop="-25px"
    leftHeaderText.style.marginBottom="-60px"
}

let employeeData=document.querySelector("#employeeData")
employeeData.addEventListener("click",function(){
    setTimeout(()=>{
        window.location="employeeData.html"
    })
})

////////////////////////////////////////////////////////////////

let complaints=document.querySelector("#employeeReport")
complaints.addEventListener("click",function(){
    setTimeout(()=>{
        window.location="complaints.html"
    })
})