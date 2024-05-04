let username = document.querySelector("#username")
let email = document.querySelector("#email")
let serialNum = document.querySelector("#serial-num")

let registerBtn = document.querySelector("#sign_up")

// window.open("register.html",target="_top")
registerBtn.addEventListener("click" , function(e){
    e.preventDefault()
    if( username.value==="" || email.value==="" || serialNum.value===""){
        alert("Please Fill Data!!")
    }else{
        if(validationName()==true)
       { localStorage.setItem("UserName" , username.value);
        localStorage.setItem("Email" , email.value);
        localStorage.setItem("SerialNumber" , serialNum.value)

        setTimeout(()=>{
            window.location = "registerMang.html"
        },1500)
    }}
})

function validationName(){
    nameRegix=/^[A-Z][a-z]{2,8}$/
    var test=username.value
    if(nameRegix.test(test)==true){
        username.classList.add('is-valid');
        username.classList.remove('is-invalid')
        return true;
    }else{

        username.classList.add('is-invalid');
        username.classList.remove('is-valid')
        alert("UserName Shouldn't have numbers!!"+"UserName Should Start With Capital Letter"+"UserName ")
    }
    
}