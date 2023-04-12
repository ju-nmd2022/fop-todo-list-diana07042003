let addATaskButton = document.getElementById('addATask');
let tasksContainer = document.getElementById('tasksContainer');
let inputField = document.getElementById('inputField');

addATaskButton.addEventListener('click', function() {
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    tasksContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })

    paragraph.addEventListener('dblclick', function(){
        tasksContainer.removeChild(paragraph);
    })
})