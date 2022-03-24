let edit = document.getElementById("untitle");
let inputText = document.querySelector(".result > input");
console.log(inputText)
edit.onclick=function(){
inputText.style.cssText = "display:block; border-top-right-radius: 50px;";
edit.classList.add("move");

}
