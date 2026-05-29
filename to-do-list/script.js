const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask(){

  let task = taskInput.value.trim();

  if(task === ""){
    alert("Enter a task");
    return;
  }

  let li = document.createElement("li");

  let text = document.createElement("span");
  text.innerText = task;

  let btns = document.createElement("div");
  btns.classList.add("btns");

  let editBtn = document.createElement("span");
  editBtn.innerHTML = "✏️";
  editBtn.classList.add("edit");

  let deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = "🗑️";
  deleteBtn.classList.add("delete");

  editBtn.onclick = function(e){
    e.stopPropagation();
    let newTask = prompt("Edit task", text.innerText);
    if(newTask) text.innerText = newTask;
  };

  deleteBtn.onclick = function(e){
    e.stopPropagation();
    li.remove();
  };

  li.onclick = function(){
    text.classList.toggle("completed");
  };

  btns.appendChild(editBtn);
  btns.appendChild(deleteBtn);

  li.appendChild(text);
  li.appendChild(btns);

  taskList.appendChild(li);

  taskInput.value = "";
}