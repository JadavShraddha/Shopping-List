var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var dlt = document.getElementsByClassName("btn");

//remove element
function removeParent(event){
    event.target.removeEventListener("click", removeParent);
    event.target.parentNode.remove();
}

//delete already exist list item
for (var i=0; i < dlt.length; i++){
    dlt[i].addEventListener("click", removeParent);
}

//create a list of element
function createListElement(){
    var bttn = document.createElement("button");
    bttn.innerHTML = "Delete";
    bttn.onclick = removeParent;

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.innerHTML = li.innerHTML + " ";
	li.appendChild(bttn);
    ul.appendChild(li);
    input.value = "";
}

//add item into list after click enter
function addListAfterClick(){
    if (input.value.length > 0){
        createListElement();
    }
}

//add item into list after press enter
function addListAfterKeyPress(event){
    if (input.value.length > 0 && event.code == "Enter"){
        createListElement();
    }
}

//Listen to event occure of click on "enter item"
button.addEventListener("click", addListAfterClick);

//Listen to event occure of press "enter" 
input.addEventListener("keypress", addListAfterKeyPress);