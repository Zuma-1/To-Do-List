var contentOfList = document.getElementById("contentOfList");
var addBtn = document.getElementById("addBtn");
var parentOfList = document.querySelector(".parentOfList");
var upadteBtn = document.getElementById("updateBtn");
var index ;

// localStorage.clear()
var lists;
if(localStorage.getItem("lists") == null){
lists = [];
}else{
lists = JSON.parse(localStorage.getItem("lists"));
displayList()
}







// add list
function addList() {
var list = {
  content: contentOfList.value,
  isChecked: false,
};
  lists.push(list);
  displayList() ;
  console.log(lists);
  contentOfList.value = null;
  saveToLocalStorage();
}



function displayList() {
    var cartona = "";
  for (let iter in lists) {
    cartona += `
 <div class="list bg-black d-flex flex-column align-items-center justify-content-center rounded-2 p-3 my-2">
          <p class="text-white">${lists[iter].content}</p>

          <div class="btns d-flex align-items-center justify-content-center gap-2">
           
            <button class="btn btn-danger text-white d-flex align-items-center justify-content-center column-gap-1" id='deleteBtn' onclick='deleteList(${iter})'>Delete<i class="fa-solid fa-trash"></i></button>
            <button class="btn btn-warning text-white d-flex align-items-center justify-content-center column-gap-1" onclick='setToUpdate(${iter})'>Edit<i class="fa-solid fa-pen"></i></button>
            <label for="checked" onclick='checkedList(this)' title="If You Want To Check This Click Here"></label>
            <input type="checkbox" id="checked">
          </div>


        </div>
`;
  }

  parentOfList.classList.add("p-2");
  parentOfList.innerHTML = cartona;
  saveToLocalStorage();

}
addBtn.addEventListener("click", addList);


// set to update
function setToUpdate(x){
contentOfList.value = lists[x].content;
addBtn.classList.add('d-none');
upadteBtn.classList.remove("d-none");
index =x;
saveToLocalStorage();
}



// update 
function update(){
lists[index].content = contentOfList.value;
upadteBtn.classList.add("d-none");
addBtn.classList.remove("d-none");
displayList();
saveToLocalStorage()
console.log(index);
}

upadteBtn.addEventListener("click" , update);


// delete list
function deleteList(x){
lists.splice(x,1);
displayList();
saveToLocalStorage();
}







// checked list
function checkedList(elem){
elem.classList.toggle("bg-info");
var muchOfList = document.querySelectorAll('.list');
for(let num in muchOfList){
if(muchOfList[num].children[1].children[2].classList.contains("bg-info")){
muchOfList[num].classList.replace("bg-black","bg-selected");
saveToLocalStorage();
}else{
muchOfList[num].classList.replace("bg-selected","bg-black");
saveToLocalStorage();
}
}
}



window.addEventListener("load",function(){
this.document.getElementById("upSpinner").classList.remove("d-flex");
this.document.getElementById("upSpinner").classList.add("d-none");
this.document.getElementById("upParent").classList.remove("d-none");
})




document.addEventListener("keydown" , function(event){

if(event.key=="Enter"){
addList()
}



})


function saveToLocalStorage(){
localStorage.setItem("lists",JSON.stringify(lists))
}




