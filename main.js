let editor = document.querySelector('.link')
let editorBtn = document.querySelector('.linkBtn')
let startNow = document.getElementById('start')
// open another page
editor.onclick = function () {
  window.open('/login/login.html')
}

editorBtn.addEventListener('click', () => {
  window.open('editor/editor.html')
})
startNow.addEventListener('click', () => {
  window.open('editor/editor.html')
})
let switchPrice = document.getElementById('check')
let discText = document.getElementById('proo')
let discSpan = document.getElementById('disc')
let descPra = document.getElementById('disc-pra')
let discountDiv = document.getElementById('discount')
//price
switchPrice.addEventListener('change', () => {
  if (switchPrice.checked) {
    discText.innerHTML = '$6 '
    discText.appendChild(discSpan)
    descPra.style.cssText = 'display:block'
    discText.style.cssText = 'margin-bottom:0'
    discountDiv.style.cssText = 'display:block'
  } else {
    discText.innerHTML = '$9 '
    discText.appendChild(discSpan)
    descPra.style.cssText = 'display:none'
    discText.style.cssText = 'margin-bottom:15px'
    discountDiv.style.cssText = 'display:none'
  }
})

//discount
