var inp=document.querySelector("#inp");
var taskList=document.querySelector("#task-list");
var addtext=document.querySelector("#add");


addtext.addEventListener("click", createElement);
taskList.addEventListener("click",removeElement);




// ** Create element and add list
function createElement(){
if(inp.value===""){
alert("Yeni dəyər daxil edin");    
}
else
{
var li =document.createElement("li");
var text=document.createTextNode(inp.value);
li.appendChild(text);
var div=document.createElement("div");
div.className="icon";
var trash=document.createElement("i");
trash.className="fas fa-trash";
trash.id="remove";
div.appendChild(trash);
li.appendChild(div);
taskList.appendChild(li);
inp.value="";
console.log(li);}}




//Remove Element in list
function removeElement(e){
if(e.target.className=="fas fa-trash"){
if(confirm("silmək istədiyinizə əminsiniz?")){
e.target.parentElement.parentElement.remove();    
}
console.log(e.target);    
}}



