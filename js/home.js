let logOutBtn =document.querySelector("#logOutBtn")
const welcomeMsg =document.querySelector("#welcomeMsg")

if(localStorage.getItem("users")){
  const userName = localStorage.getItem("users")
  console.log(userName);
  welcomeMsg.innerHTML =`Welcome ${userName} <i class="fa fa-heart "></i>`;

}else{
    welcomeMsg.innerHTML =`you are not logged in  <i class="fa-solid fa-face-sad-cry"></i>`;
     setTimeout(function(){
        window.location.href="index.html"
     },2000)
}

logOutBtn.addEventListener("click",function(e){
  console.log(e);
  setTimeout(function(){
    window.location.href="index.html"
 },1000)
  
})



















