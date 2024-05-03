let links=document.querySelector("#links")
let emplyeeInfo = document.querySelector("#em-info")
let employee = document.querySelector("#employee")
let insurancePage =document.querySelector("#ins-page")
let scrollImg= document.querySelector("#scroll")
let footer_home=document.querySelector(".footer-home")
let leftSideImage= document.querySelector("#lSide-Img")
let leftSideText = document.querySelector("#lSide-Text")

if(localStorage.getItem("UserName")){
    links.remove()
    emplyeeInfo.style.visibility="visible"
    employee.innerHTML = localStorage.getItem("UserName")
    emplyeeInfo.style.display="flex"
    insurancePage.style.display="block"
    scrollImg.style.display="none"
    footer_home.style.display="none"
    leftSideImage.style.marginTop="-26px"
    leftSideText.style.marginTop="-22px"
    leftSideImage.style.marginRight="10px"
    

}
/////////////////////////////////////////////////////////////////

let car_explore=document.querySelector("#explore")
car_explore.addEventListener("click",function(){
    setTimeout(()=>{
        window.location="car.html"
    },1000)
})

//////////////////////////////////////////////////////////////////
let life_explore=document.querySelector("#exploreL")
life_explore.addEventListener("click",function(){
    setTimeout(()=>{
        window.location="life.html"
    },1000)

})
//////////////////////////////////////////////////////////////////
let property_explore=document.querySelector("#exploreP")
property_explore.addEventListener("click",function(){
    setTimeout(()=>{
        window.location="property.html"
    },1000)
})
//////////////////////////////////////////////////////////////////
let fire_explore=document.querySelector("#exploreH")
fire_explore.addEventListener("click",function(){
    setTimeout(()=>{
        window.location="health.html"
    },1000)
})
//////////////////////////////////////////////////////////////////

employee.addEventListener("click",function(){
    setTimeout(()=>{
        window.location = "employee.html"
    },1500)
})
////////////////////////////////////////////////////////////////

let company_manager=document.querySelector("#manager")
company_manager.addEventListener("click",function(){
    setTimeout(()=>{
        window.location ="manager.html"
    },1500)
})

///////////////////////////////////////////////////////////////

let logOut=document.querySelector("#logout")
logOut.addEventListener("click",function(){
    setTimeout(()=>{
        window.location="register.html"
        localStorage.clear()
    },1000)
})