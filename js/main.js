var elInput = document.querySelector(".input");
var elOut = document.querySelector(".output");
var elBtn = document.querySelector(".btn");
var elBtn1 = document.querySelector(".btn1");
var newList = document.querySelector(".list");
var elTime = document.querySelector(".time")
var newArr = [];


elBtn.addEventListener("click", function(e){
   e.preventDefault();
 
   var newItem = document.createElement("li");
    
  var elInputVal = elInput.value.trim();
  newItem.textContent = elInputVal
  newArr.unshift(elInputVal);
  newList.appendChild(newItem);

  elOut.textContent = newArr
  
   console.log(newArr);

  elInput.value = "";
 
})


var data = new Date()
elTime.textContent = data
