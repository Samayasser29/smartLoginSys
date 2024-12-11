const email = document.querySelector("#email")
const password = document.querySelector("#password")
const login = document.querySelector("#login") 
let loginBtn = document.querySelector("#loginBtn")
let errorLoginMsg =document.querySelector("#errorLoginMsg")
let form = document.querySelector("form")
let accounts =[]

if (localStorage.getItem("account")) {
    accounts = JSON.parse(localStorage.getItem("account"));
  }
 console.log(accounts)

function loginCheck() {
    errorLoginMsg.classList.add("d-none")
    errorLayer.classList.replace("d-block" , "d-none")
    const enteredEmail = email.value;
    const enteredPassword = password.value;
    if (!enteredEmail || !enteredPassword) {
       errorLayer.classList.replace("d-none" , "d-block")
        return;
    }
    
    for(let i=0 ; i< accounts.length;i++){
        if(accounts[i].userEmail === email.value && accounts[i].userPassword === password.value){
            setTimeout(function(){
                window.location.href ="home.html"
            },1000); 
            localStorage.setItem("users",accounts[i].userName);
            updateLoginInputs();


            return;
        }
    }
}

loginBtn.addEventListener("click",function(e){
    loginCheck();
});

function updateLoginInputs(){
    email.value="" ;
    password.value=""; 
}

form.addEventListener("submit",function(e){
    e.preventDefault()
    console.log(e);   

})

const regex ={
    email:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/ ,
    password:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
}

function validation(input){
    console.log(input.value);
    console.log(regex[input.id]);
    if(regex[input.id].test(input.value)){
       input.classList.add("is-valid")
       input.classList.remove("is-invalid")
       console.log(regex[input.id]);
    }else{
        input.classList.add("is-invalid")
        input.classList.remove("is-valid")
    }
  }
  email.addEventListener("input",function(e){
        validation(email)
      })
      password.addEventListener("input",function(e){
        validation(password)
      })
    





