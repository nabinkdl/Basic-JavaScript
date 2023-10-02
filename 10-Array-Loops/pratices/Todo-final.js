

const TodoList = [];



function renderTodo(){
    let totalList = '';
    for(i=0; i<TodoList.length; i++){
        const todoObj = TodoList[i];
        // const name = todo.name;
        // const dueDate = todo.dueDate;

        // const {name} = todo;
        // const {dueDate} = todo;
        const {name, dueDate} = todoObj;

        const html = `<p>${name} ${dueDate}
        
        <button onclick="

        TodoList.splice(${i},1); renderTodo();

        ">Delete</button></p>`;
        totalList += html;
    }
    document.querySelector('.js-todoList').innerHTML = totalList;
    };


    function addInput(){
        const inputData = document.querySelector('.js-input');
        const inputDate = document.querySelector('.js-dueDate');
        const name = inputData.value;
        const dueDate = inputDate.value;
        TodoList.push(
        {//name:name, 
        //dueDate:dueDate  
        name , dueDate});
        renderTodo();
        console.log(TodoList);
        
    };
    
    