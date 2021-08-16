// UI 

const form = document.getElementById("task-form");
const taskinput = document.getElementById("task");
const filter = document.getElementById('filter');
const tasklist = document.querySelector(".collection");
const clearbtn = document.querySelector('.clear-tasks');

function addtask(e){
    // console.log('hay');

    if(taskinput.value === ''){
        window.alert("Add a task");
        return;
    }

    // console.log(taskinput.value);

    // create li element 
    const li = document.createElement('li');
    
    // add class 
    // li.classList.add('collection-item')
    li.className = "collection-item";

    // create test node append to li 
    li.appendChild(document.createTextNode(taskinput.value));
    
    // create link 
    const link = document.createElement("a");
    
    // add class 
    link.className = "delete-item secondary-content";
    
    // add icon 
    link.innerHTML = `<i class="far fa-trash-alt"></i>`;

    // console.log(link);
    // append link to li 
    li.appendChild(link);

    // append li to ul 
    tasklist.appendChild(li);
    
    // console.log(li);

    // store task 
    storetaskinlocalstroage(taskinput.value);

    taskinput.value = '';

    e.preventDefault();
}

// Remove Task 
function removetask(e){
    // console.log(e.target);
    // console.log(e.target.parentElement);

    if(e.target.parentElement.classList.contains('delete-item')){
        // console.log('delete item');

        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }

    }

    removetaskfromlocalstroage(e.target.parentElement.parentElement);   
}

// Clear Task

function cleartasks(){
    // console.log('hay');

    // Method 1
    // tasklist.innerHTML = '';

    // Method 2
    // console.log(tasklist);
    // console.log(tasklist.childElementCount);

    // let x = 0;
    // while(x < tasklist.childElementCount){
    //     // tasklist.removeChild(tasklist.firstChild);
    // }

    // Method 3

    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }

    // clear all data from localstorage 
    cleartasksfromlocalstorage();
}


// Store Task 

function storetaskinlocalstroage(task){
    // console.log(task);

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// get task forom localstorage 
function gettasks(){
    // console.log('hay');

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(task => {
        // console.log(task);

        // create li element 
        const li = document.createElement('li');
        
        // add class 
        // li.classList.add('collection-item')
        li.className = "collection-item";

        // create test node append to li 
        li.appendChild(document.createTextNode(task));
        
        // create link 
        const link = document.createElement("a");
        
        // add class 
        link.className = "delete-item secondary-content";
        
        // add icon 
        link.innerHTML = `<i class="far fa-trash-alt"></i>`;

        // append link to li 
        li.appendChild(link);

        // append li to ul 
        tasklist.appendChild(li);
    });
}

// Remove task from localstorage 

function removetaskfromlocalstroage(taskitem){
    // console.log('hay');
    console.log(taskitem);
    console.log(taskitem.textContent);

    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((task, index)=>{
        // console.log(task);

        if(task === taskitem.textContent){

                // where we want to start(index) , where we wnat to end (how many) 
            tasks.splice(index,1);
        }

    });

    // tasks = tasks.filter(task => task !== taskitem.textContent);

    localStorage.setItem('tasks', JSON.stringify(tasks));

}

// Clear All Data from Localstroage 

function cleartasksfromlocalstorage(){
    localStorage.clear();
}

// Filter Tasks 
function filtertasks(e){
    // console.log('hay');
    // console.log(e.target);
    const inputfilter = e.target.value.toLowerCase();
    // console.log(inputfilter);

    const tasks = document.querySelectorAll('.collection-item');
    // console.log(tasks);

    tasks.forEach(task=>{
        // console.log(task);
        const item = task.firstChild.textContent.toLocaleLowerCase();
        // console.log(item);
        console.log('item'.indexOf(inputfilter));
        // if(item.indexOf(inputfilter) !== -1){
        //     task.style.display = 'block';
        // }else{
        //     task.style.display = 'none';
        // }
    });
}



// Event Listener 
// Add Task 
form.addEventListener("submit", addtask);

// Remove Task 
tasklist.addEventListener('click', removetask);

// Clear Task 
clearbtn.addEventListener('click', cleartasks);

// Dom Load Event 
document.addEventListener('DOMContentLoaded', gettasks)

// Filter task event 
filter.addEventListener('keyup', filtertasks);
