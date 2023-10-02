
 const TodoListOne = [];


function addInputOne(){
    const inputDataOne = document.querySelector('.js-inputOne');
    const inputData = inputDataOne.value;
    console.log(inputData);
    TodoListOne.push(inputData);
    console.log(TodoListOne);
    inputDataOne.value = '';
};


// TodoListTwo 


const TodoListTwo = [];

function addInputTwo(){
    const inputDataTwo = document.querySelector('.js-inputTwo');
    const inputData2 = inputDataTwo.value;
    TodoListTwo.push(inputData2);
    inputDataTwo.value = '';
    renderTodo();
};


function renderTodo(){
    let totalList = '';
    for(i=0; i<TodoListTwo.length; i++){
        const todo = TodoListTwo[i];
        const html = `<p>${todo}
        
        <button onclick="

        TodoListTwo.splice(${i},1); renderTodo();

        ">Delete</button></p>`;
        totalList = totalList + html;
    }
    document.querySelector('.js-todoList').innerHTML = totalList;
    };

    