


const inputVal = document.getElementsByClassName('inputVal')[0];

 const addTaskBtn = document.getElementsByClassName('btn')[0];
 

addTaskBtn.addEventListener('click', function (){
  
if(inputVal.value.trim()!=0){
       let localItems = JSON.parse( localStorage.getItem('localItem'))
    if(localItems === null){
         taskList = []

    }else{
        taskList = localItems;
    }
    taskList.push(inputVal.value)
    localStorage.setItem('localItem', JSON.stringify(taskList)); 
}

    showItem()
})

function showItem(){
    let localItems = JSON.parse( localStorage.getItem('localItem'))
    if(localItems === null){
         taskList = []

    }else{
        taskList = localItems;
    }

//The next codes are inspired from the video https://youtu.be/q0-N_w0Op84
let html = '';
let itemShow = document.querySelector('.todoLists');
taskList.forEach((data, index )=> {
    

    html += `
    <div class="todoList">
    <p class="pText">${data}</p>
    <button class="deleteTask" onClick="deleteItem(${index})">x</button>
    <button class="checkedTask" onClick="toggleSize(this)(${index})">✔️</button>

    </div>
    `
})
itemShow.innerHTML = html;
}
showItem()

function deleteItem(index){
    let localItems = JSON.parse( localStorage.getItem('localItem'))
    taskList.splice(index, 1)
    localStorage.setItem('localItem', JSON.stringify(taskList));
    showItem()
}


   
function toggleSize(element) {
    element.classList.toggle("enlarged");
  }
