let username = document.querySelector("#username")
let serialNum = document.querySelector("#serial-num")
let emplyeeInfo = document.querySelector("#em-info")


let loginBtn = document.querySelector("#sign-in")

let getUser = localStorage.getItem("UserName")
let getSerial = localStorage.getItem("SerialNumber")

loginBtn.addEventListener("click" , function(e){
    e.preventDefault()
    if(username.value==="" || serialNum.value===""){
        alert("Please Fill Data!!")
    }else{
        if((getUser && getUser.trim() ===username.value) && (getSerial && getSerial.trim()=== serialNum.value))
        {
            setTimeout(()=>{
                window.location = "managerIndex.html"
            },1500)

        }else{
            alert("UserName or Password is Wrong , Try Again!!")
        }
    }
})