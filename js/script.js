
var form =document.getElementById("form");
var text =document.getElementById("text");
var submit = document.getElementById("submit");
var ul= document.getElementById("ul");
var done =document.querySelectorAll(".task");
var div = document.querySelectorAll(".div")
 let arrayTask =[];
 saveTask()
 getData()
 if (localStorage.getItem("tasks")) {
  arrayTask= JSON.parse(localStorage.getItem("tasks"));
}
form.onsubmit = newTask;
saveTask()
getData()
// dddtask
function newTask(e){
e.preventDefault()
if (text.value==="") {
    return false
} else {
 var listitem = document.createElement("li");
listitem.classList.add("list");
var task = text.value;
   listitem.innerHTML=`
 <div class="div   ">
   <span class = "task ">${task}</span> 
 </div>  
 <div>
  <i class="fas fa-edit   edit"></i>
    <i class="fas fa-trash-alt  del"></i>
 </div>
   ` 
   // editTask
var edit= document.querySelectorAll(".edit");
edit.forEach((btn)=>{
  btn.onclick = editTask;
  saveTask()
  getData()
})
   ul.appendChild(listitem);
   text.value=""


//    doneTask
var div = document.querySelectorAll(".div");
div.forEach((btn)=>{
btn.onclick = doneTask;
saveTask()
getData()
})

// deletetask
var delbtn =document.querySelectorAll(".del");
delbtn.forEach( (btn)=>{
    btn.onclick = deleteTask;
   
    saveTask()
    getData()
})
}
}
                                                              // saveTask

function saveTask(){
var tasks =[];
ul.querySelectorAll("li").forEach(function(item){
  tasks.push(item.textContent);
});
window.localStorage.setItem('tasks' , JSON.stringify(tasks));

}
 function  getData(){
  let data = window.localStorage.getItem("tasks");
  if (data){
    let tasks = JSON.parse(data);

   
  }
  }

                                                                          // doneTask
function doneTask(e){
e.target.parentNode.classList.toggle("done"); 
}
                                                                          // editTask
function editTask (event) {

text.value= done.textContent;
event.target.parentNode.parentNode.remove();
}
                                                                                  // deletetask
    function deleteTask(a) {
        a.target.parentNode.parentNode.remove();
        
          }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let input =document.getElementById("text");
// let submit = document.getElementById("submit");
// let tasksDiv = document.getElementById("ul");
// let arrayTask =[];
// if (localStorage.getItem("tasks")) {
//   arrayTask= JSON.parse(localStorage.getItem("tasks"));
// }
// getData()
// // dddtask
// submit.onclick= function(){
//   if (input.value!==""){
//  addTaskToArray(input.value);
//  input.value="";
//   }
// } ;
// tasksDiv.addEventListener("click" , (e)=>{
    
//                                            // deletetask from localStorage
//    deletetask(e.target.parentElement.parentElement.getAttribute("data-id"));
//    e.target.parentElement.parentElement.remove()
//   // if (e.target.classlist.contains("del")) {
//   //   e.target.parentElement.parentElement.remove()
//   // }
// })
// function addTaskToArray(taskText){
// const task ={
//   id :Date.now(),
//   title: taskText ,
//   completed :false,
// };
// arrayTask.push(task);
// addToPage(arrayTask);
//                                               // localStorage
// saveData(arrayTask)
// }
// function addToPage(arrayTask){
//  tasksDiv.innerHTML ='' ;
//  arrayTask.forEach((task) => {
//   let div = document.createElement("div");
//   div.className ="task";
// if (task.completed) {
//   div.className ="task  done";
// }
//   div.setAttribute("data-id" , task.id);
//   div.appendChild(document.createTextNode(task.title));
//  let span =document.createElement("span");
//  span.innerHTML=`
//   <i class="fas fa-edit   edit"></i>
//      <i class="fas fa-trash-alt  del"></i>`
// //  span.className ="del";
// //  span.appendChild(document.createElement("delete"));
//  div.appendChild(span);
//  tasksDiv.appendChild(div) ;
//  });
// }
// function  saveData(arrayTask){
// window.localStorage.setItem("tasks" , JSON.stringify(arrayTask));
// }
// function  getData(){
// let data = window.localStorage.getItem("tasks");
// if (data){
//   let tasks = JSON.parse(data);
//   addToPage(tasks)
// }
// }
// function deletetask(taskId){
//   arrayTask =arrayTask.filter((task) => task.id != taskId )
// }







