let sidebar=document.getElementById("sidebar");
let burger=document.getElementById("my-burger")
burger.addEventListener("click",function(){
sidebar.classList.remove("none");
burger.parentElement.classList.add("none")

}


)
let x=document.getElementById("x")
x.addEventListener("click",function(){

sidebar.classList.add("none")
burger.parentElement.classList.remove("none")


})