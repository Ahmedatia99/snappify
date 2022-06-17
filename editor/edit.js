let edit = document.getElementById('untitle')
let inputText = document.querySelector('.result > input')

edit.onclick = function () {
  inputText.style.cssText = 'display:block; border-top-right-radius: 10px;'
  edit.classList.add('move')
}

let codebtn = document.getElementById('multiple-code')
let func = document.getElementById('twice')
let firstFunc = document.getElementById('once')
let cont = document.querySelector('.content')
let vgs = document.querySelector('.tools span button svg')
let secbtn = document.querySelector('.multiple')
let style = 'opacity:1';
let statue = 0 ;
function show() {
  func.style.cssText = 'display:block;'
  firstFunc.classList.add('disapper')
}
function display() {
  func.style.cssText = 'display:none'
  firstFunc.classList.remove('disapper');
  vgs.style.cssText = "opacity:0.5"
}
codebtn.addEventListener('click', () => {
  if (cont.contains(func)) {
    show()
    vgs.style.cssText = style
    statue ++;
  }
  if(statue > 1){
    display();
    statue = 0;
  }
})
/* Style Not Clone*/
// codebtn.addEventListener("click",(e) =>{ //cloneNode
//   let newFirstFunc = firstFunc.cloneNode(true);
//   document.body.appendChild(newFirstFunc)
// })

let textBtn = document.getElementById('txt-btn')
textBtn.addEventListener('click', () => {
  let createDiv = document.createElement("div");
  let createInput = document.createElement("input");

  createDiv.appendChild(createInput)
  cont.appendChild(createDiv)
  createDiv.classList.add("editor-div");
  createInput.classList.add("editor-input")
  createInput.placeholder ="Text"
  createDiv.style.cssText="display:none"
})
textBtn.style.cssText = "cursor:no-drop"
