const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
let addToDo = document.getElementById('addToDo');
let toDoPage = document.getElementById('toDoPage');
let inputField = document.getElementById('inputField');

clear.addEventListener("click", function(){
    location.reload();
});

const options = {weekday : "long", month: "short", day: "numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

addToDo.addEventListener('click', function(){
	var paragraph = document.createElement('p');
	paragraph.classList.add('paragraph');
	paragraph.innerText = inputField.value;
	toDoPage.appendChild(paragraph);
	inputField.value = "I want to ";
	paragraph.addEventListener('click', function(){
	  paragraph.style.textDecoration = "line-through";
	})
	paragraph.addEventListener('dblclick', function(){
	  toDoPage.removeChild(paragraph);
	})
})

var x = document.getElementById("inputField");
x.addEventListener("focus", myFocusFunction, true);
x.addEventListener("blur", myBlurFunction, true);

function myFocusFunction() {
	document.getElementById("inputField").style.backgroundColor = "grey";  
}

function myBlurFunction() {
	document.getElementById("inputField").style.backgroundColor = "";  
}
