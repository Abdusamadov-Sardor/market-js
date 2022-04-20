var elInput = document.querySelector(".input");
var elOut = document.querySelector(".output");
var elBtn = document.querySelector(".btn");
var newList = document.querySelector(".list");
var newArr = [];


elBtn.addEventListener("click", function(e){
   e.preventDefault();
 
   var newItem = document.createElement("li");
    newItem.textContent = elInput.value;
  var elInputVal = elInput.value.trim();
  newArr.push(elInputVal);
  elOut.appendChild(newList);
  newList.appendChild(newItem);
 
   console.log(newArr);
 
  elInput.value = "";
 
})






