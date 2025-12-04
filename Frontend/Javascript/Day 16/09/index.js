const form = document.querySelector('form');
const allTask = document.querySelector('#allTask');
const input = document.querySelector('input');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const text = input.value.trim();
     
    if(text=="")
        return;

    const parent = document.createElement('div');
    parent.style.marginTop = "10px";
    parent.style.textAlign = "center";
    
    const task = document.createElement('span');
    task.textContent = text;
    task.style.fontSize = "25px";

    task.style.marginRight = "20px";

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.style.padding = "20px";
    deleteButton.style.border = "none";
    deleteButton.style.cursor = "pointer";


    const doneButton = document.createElement('button');
    doneButton.textContent = "done";
    doneButton.style.marginRight = "10px";
    doneButton.style.padding = "20px";
    doneButton.style.border = "none";
    doneButton.style.cursor = "pointer";
   parent.append(task,doneButton,deleteButton);

   allTask.append(parent);

    deleteButton.addEventListener('click' , () => {
       parent.remove();
   });

   doneButton.addEventListener('click', () => {
       task.style.textDecoration = 'line-through';
       task.style.color = "grey";
   });

   form.reset();

})