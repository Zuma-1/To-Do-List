var contentOfList = document.getElementById("contentOfList");
var addBtn = document.getElementById("addBtn");
var parentOfList = document.querySelector(".parentOfList");
var upadteBtn = document.getElementById("updateBtn");
var index ;



var lists = [];
// add list
function addList() {
var list = {
  content: contentOfList.value,
  isChecked: false,
};
  lists.push(list);
  displayList() ;
  console.log(lists);
}



function displayList() {
    var cartona = "";
  for (let iter in lists) {
    cartona += `
 <div class="list bg-black d-flex flex-column align-items-center justify-content-center rounded-2 p-3 my-2">
          <p class="text-white">${lists[iter].content}</p>

          <div class="btns d-flex align-items-center justify-content-center gap-2">
           
            <button class="btn btn-danger text-white d-flex align-items-center justify-content-center column-gap-1" id='deleteBtn' onclick='deleteList()'>Delete<i class="fa-solid fa-trash"></i></button>
            <button class="btn btn-warning text-white d-flex align-items-center justify-content-center column-gap-1" onclick='setToUpdate(${iter})'>Edit<i class="fa-solid fa-pen"></i></button>
            <label for="checked" onclick='checkedList(${iter},this)' title="If You Want To Check This Click Here"></label>
            <input type="checkbox" id="checked">
          </div>


        </div>
`;
  }

  parentOfList.classList.add("p-2");
  parentOfList.innerHTML = cartona;

}
addBtn.addEventListener("click", addList);


// set to update
function setToUpdate(x){
contentOfList.value = lists[x].content;
addBtn.classList.add('d-none');
upadteBtn.classList.remove("d-none");
index =x;
}



// update 
function update(){
lists[index].content = contentOfList.value;
upadteBtn.classList.add("d-none");
addBtn.classList.remove("d-none");
displayList();
console.log(index);
}

upadteBtn.addEventListener("click" , update);


// delete list
function deleteList(){
lists.splice(index,1);
displayList();
}







// checked list
function checkedList(x,elem){
elem.classList.toggle("bg-info");
var muchOfList = document.querySelectorAll('.list');
for(let num in muchOfList){
if(muchOfList[num].children[1].children[2].classList.contains("bg-info")){
muchOfList[num].classList.replace("bg-black","bg-selected");
}else{
muchOfList[num].classList.replace("bg-selected","bg-black");
}
}
}



window.addEventListener("load",function(){
this.document.getElementById("upSpinner").classList.remove("d-flex");
this.document.getElementById("upSpinner").classList.add("d-none");
this.document.getElementById("upParent").classList.remove("d-none");
})












