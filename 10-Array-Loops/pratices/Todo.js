const todoList = [];




function addTask()  
        {
            let inputValue = document.querySelector('.js-inputTask') ;
            todoList.push(inputValue.value);
            
            console.log(todoList);

            inputValue.value = '';
            // document.querySelector('.js-task').innerHTML = ` ${todoList} `;
            
        };







