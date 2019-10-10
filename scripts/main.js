let legalPart = document.querySelector(".legalPart")
let legalContent = document.querySelector(".legalContent")
let i = 0

legalPart.addEventListener(
  'mouseover', function(){
    if (i == 0){
      legalContent.classList.add("isOpen")
      i++
    }
    else if(i==1){
      legalContent.classList.remove("isOpen")
      i--
    }
  }
)
