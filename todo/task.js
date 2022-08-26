function createTask(text){

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

            taskWrap.remove()
            let storage = Object.values(localStorage)
            let targetValue = target.parentElement.textContent.replace('×', '')
            storage.forEach((item)=>{

                if(item == targetValue){
                    let key = findLocalStorageKey(localStorage, item)
                    localStorage.removeItem(key)
                };
            });
        };
    });

    return taskWrap
};

function findLocalStorageKey(object, value) {
    return Object.keys(object).find(key => object[key] === value)
};


function addToStorage(counter, value){

    localStorage.setItem('counter', counter)
    localStorage.setItem(`task ${counter}`, value)    
};

window.addEventListener('DOMContentLoaded', ()=>{
    // localStorage.clear();
    let input = document.querySelector('.tasks__input')
    let btn = document.querySelector('.tasks__add')
    let taskList = document.querySelector('.tasks__list')
    let storage = Object.values(localStorage)
    let counter

    if (localStorage.getItem('counter')){
        let counterOld = localStorage.getItem('counter')
        counter = localStorage.setItem('coutner', counterOld)
    }else{
        counter = 0
    };
 
    for (let i = 0; i < storage.length; i++){
        if (!Number(storage[i])){

            let task2 = createTask(storage[i])
            taskList.parentNode.appendChild(task2)
        };
    };

    btn.addEventListener('click', (e)=>{

        let target = e.target
        if (target  && input.value != false && target.classList.contains('tasks__add')){

            let counterModif = localStorage.getItem('counter')
            let task = createTask(input.value)
            counterModif++

            localStorage.setItem('counter', counter)
            addToStorage(counterModif, input.value)
            taskList.parentNode.insertBefore(task, taskList)

        };
    });
});