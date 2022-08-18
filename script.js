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
