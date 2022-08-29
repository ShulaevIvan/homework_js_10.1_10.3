function createTask(text, arr){

    let taskWrap = document.createElement('div')
    let taskTitle = document.createElement('div')
    let taskA = document.createElement('a')

    taskTitle.innerHTML = text
    taskA.setAttribute('href', '#')
    taskA.textContent = '×'

    taskA.classList.add('task__remove')
    taskTitle.classList.add('task__title')
    taskWrap.classList.add('task')
    taskWrap.appendChild(taskTitle)
    taskWrap.appendChild(taskA)

    taskA.addEventListener('click', (e)=>{
        let target = e.target

        if (target && target.classList.contains('task__remove')){
            
            let value = target.parentNode.querySelector('.task__title').textContent
            for (let i = 0; i < arr.length; i++){
                if (arr[i] == value){
                    arr.splice(i, 1)
                };
            };
            localStorage.setItem('tasks', arr)
            taskWrap.remove()
        };
    });

    return taskWrap
};

function findLocalStorageKey(object, value) {
    return Object.keys(object).find(key => object[key] === value)
};


window.addEventListener('DOMContentLoaded', ()=>{

    // localStorage.clear();
    let input = document.querySelector('.tasks__input')
    let btn = document.querySelector('.tasks__add')
    let taskList = document.querySelector('.tasks__list')
    let counter = 0
    let storageValuesArr

    
    if (localStorage.getItem('tasks') != null && localStorage.getItem('tasks') != false){
        storageValuesArr = localStorage.getItem('tasks').split(',')
        for (let i = 0; i < storageValuesArr.length; i++){
            let task = createTask(storageValuesArr[i], storageValuesArr)
            taskList.parentNode.appendChild(task, taskList)
        };
    }else{
        storageValuesArr = []
    };
    
    btn.addEventListener('click', (e)=>{

        let target = e.target
        
        if (target  && input.value != false && target.classList.contains('tasks__add')){
           
            storageValuesArr.push(input.value)
            localStorage.setItem('tasks', storageValuesArr)
            let task = createTask(input.value, storageValuesArr)
            taskList.parentNode.insertBefore(task, taskList)
            input.value = ''
        };
    });
});