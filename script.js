let newTask = document.querySelector('#new_task');
let form = document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let taskFilter = document.querySelector('#task_filter');
let clearTask = document.querySelector('#clear_task_btn');

//define event listeners
form.addEventListener('submit',function(e){
    if(newTask.value === ''){
        alert('add new task')
    }else{
       let li = document.createElement('li');
       li.appendChild(document.createTextNode(newTask.value));
       taskList.appendChild(li);
       let link= document.createElement('a');
        link.setAttribute('href','#');
        link.innerHTML= 'x'
        li.appendChild(link)

       newTask.value = ''
    }
   e.preventDefault()
});
taskList.addEventListener('click',removeTask);

function removeTask(e){
    if(e.target.hasAttribute('href')){
        
        if(confirm('Are you sure')){
            let ele = e.target.parentElement;
            //console.log(ele);
            ele.remove()
        }
    }
    // console.log(e.target);
    // let eee=e.target;
    // eee.remove();
};

clearTask.addEventListener('click',allClear);

function allClear(e){
    // taskList.remove()
    // taskList.innerHTML = ''
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
}
taskFilter.addEventListener('keyup',filterTask);

function filterTask(e){
    let text = e.target.value.toLowerCase();
    //console.log(text);
    document.querySelectorAll('li').forEach(task => {
        let item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text)!= -1){
            task.style.display = 'block';
        }else{
            task.style.display= 'none';
        }
    })
}
// function filterTask(e){
//     let text =e.target.value;
    
//     document.querySelectorAll('li').forEach(task =>{
//         let item = task.textContent;
//         if(item.indexOf(text)!=-1){
//             task.style.display= 'block';
//         }else{
//             task.style.display='none'
//         }
//     })

// }