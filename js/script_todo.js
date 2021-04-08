function showAll(){
    var x = document.getElementById("todo_list").querySelectorAll("li");
    for (let i = 0; i<x.length; i++) {
        x[i].style.display = "flex";
    }
}
function active(){
    var x = document.getElementById("todo_list").querySelectorAll("li");
    for (let i = 0; i<x.length; i++) {
        if (x[i].className === 'completed') {
            x[i].style.display = "none";
        }
        if (x[i].className !== 'completed') {
            x[i].style.display = "flex";
        }
    }
}
function completed(){
    var x = document.getElementById("todo_list").querySelectorAll("li");
    for (let i = 0; i<x.length; i++) {
        if (x[i].className !== 'completed') {
            x[i].style.display = "none ";
        }
        if (x[i].className === 'completed') {
            x[i].style.display = "flex ";
        }
    }
}
function handleChange(checkbox) {
    var parent = checkbox.parentElement;
    let child_label = parent.querySelector("label");
    if(checkbox.checked == true) {

        child_label.classList.add("checked");
        parent.classList.add("completed");
    }else {
        child_label.classList.remove("checked");
        parent.classList.remove("completed");

    }
    console.log(child_label)
}
var todo_list = document.getElementById("todo_list")
document.getElementById("add_item").addEventListener("click", function() {
    var new_todo_val = document.getElementById("newTodo").value
    todo_list.innerHTML += "    <li >\n" +
        "        <input class=\"checkbox\" type=\"checkbox\"  onchange='handleChange(this);'>\n" +
        "        <label >"+new_todo_val+"</label>\n" +
        "        <input class='created_input' onClick=\"checked(this)\" type='text'  value='"+new_todo_val+"' >\n" +
        "        <button  class='change' onClick=\"change(this)\">Edit</button>\n" +
        "        <button  class='edit' onClick=\"edit(this)\">Edit</button>\n" +
        "        <button class='delete' onClick=\"remove(this)\">Delete</button>\n" +
        "    </li>"
});
function remove(el) {
    var element = el;
    console.log(element.parentElement)
    element.parentElement.remove();
}
function change(el){
    var element = el;
    var parent = element.parentElement;
    let child_label = parent.querySelector("label");
    let child_input = parent.querySelector("input[type=\'text\']");
    let edit = parent.querySelector(".edit");
    element.style.display = "none";
    edit.style.display = "inline ";
    child_label.style.display = "none ";
    child_input.style.display = "inline ";
}
function edit(el) {
    var element = el;
    var parent = element.parentElement;
    let child_input = parent.querySelector("input[type=\'text\']");
    let child_input_value = child_input.value
    let child_label = parent.querySelector("label");
    let change = parent.querySelector(".change");

    child_label.innerHTML = child_input_value;
    child_input.style.display = "none";
    child_label.style.display = "inline";
    element.style.display = "none";
    element.style.display = "none";
    change.style.display = "inline";


    console.log(label);
}
