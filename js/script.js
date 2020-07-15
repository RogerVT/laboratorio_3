let post = document.getElementById("button-post");
let clear = document.getElementById("button-clear");
let mark = document.getElementById("button-mark");
let del = document.getElementById("button-delete");

post.addEventListener("click", TodoPost);
clear.addEventListener("click", TodoClear);
mark.addEventListener("click", TodoMark);
del.addEventListener("click", TodoDel);


function TodoPost(e) {
    e.preventDefault(); 
    var todo = document.getElementById("todoText").value;
    var list = document.getElementById("todoList");

   let currentListHTML = list.innerHTML;
   list.innerHTML = currentListHTML + '<input type = "checkbox" name="todo" /> ' + todo + '<br>';

}


function TodoClear(e) {
	e.preventDefault();
	var todos = document.getElementsByName('todo');
	for(var doc of todos) {
		doc.checked = false; 
	}
}

function TodoMark(e) {
	e.preventDefault()
	var todos = document.getElementsByName('todo');
	for(var doc of todos) {
		doc.checked = true; 
	}

}

function TodoDel(e) {
	e.preventDefault(); 
	var list = document.getElementById('todoList'); 
	list.innerHTML = ''; 

}
