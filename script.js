let untitledList = document.getElementById("list");
let inputTask = document.getElementById("inputTask"); 
let addButton = document.getElementById("addTask");
let deleteButton = document.getElementById("delete");
let deleteLastButton = document.getElementById("deleteLast");

function addToList(userInput) {
    untitledList.innerHTML += `<li> ${userInput} </li>`;
}

addButton.addEventListener("click", function () {
    let usersInput = inputTask.value;
    addToList(usersInput);
});

deleteButton.addEventListener("click", function () {
    untitledList.innerHTML = ``;
});

deleteLastButton.addEventListener("click", function () {
    let listItems = untitledList.getElementsByTagName('li');
    if (listItems.length > 0) {
        listItems[listItems.length - 1].remove();
    }
})