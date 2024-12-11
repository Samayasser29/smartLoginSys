const userName = document.querySelector("#userName")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const signUp = document.querySelector("#signup") 
const errorLayer = document.querySelector("#errorLayer")
let signupBtn = document.querySelector("#signupBtn")
let errorSignMsg =document.querySelector("#errorSignMsg")
let successSignMsg =document.querySelector("#successSignMsg")
let form = document.querySelector("form")
let accounts =[]
const regex ={
    userName:/^[A-z][a-z]{2,8}$/ ,
    email:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/ ,
    password:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
}

function setLocalStorage() {
    localStorage.setItem("account", JSON.stringify(accounts));
  }
  if (localStorage.getItem("account")) {
    accounts = JSON.parse(localStorage.getItem("account"));
    
  }

  function addAcc(){
    errorSignMsg.classList.add("d-none" )
    for(let i=0 ; i<accounts.length;i++){
        if(accounts[i].userEmail === email.value){
            errorSignMsg.classList.remove("d-none" )
            updateSignUpInputs()
           return;
        }
    }
    user={
       userName:userName.value,
       userEmail:email.value,
       userPassword:password.value ,
    }
    accounts.push(user)
    updateSignUpInputs()
    setLocalStorage()

    successSignMsg.classList.remove("d-none")
    setTimeout(function(){
        window.location.href ="index.html"
    },1000);   
     console.log(accounts)
   }

   signupBtn.addEventListener("click",function(e){
    addAcc();
   })

   function updateSignUpInputs(){
    userName.value="" ;
    email.value="" ;
    password.value="";
    
}

form.addEventListener("submit",function(e){
    e.preventDefault()
    console.log(e);   

});

function validation(input){
  console.log(input);
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

//   userName.addEventListener("input",function(e){
//     validation(userName)
//   })
//   email.addEventListener("input",function(e){
//     validation(email)
//   })
//   password.addEventListener("input",function(e){
//     validation(password)
//   })

userName.addEventListener("input", (e) => {
  console.log("hello");
  validation(e.target)
  
});
email.addEventListener("input", (e) => validation(e.target));
password.addEventListener("input", (e) => validation(e.target));

