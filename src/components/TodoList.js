import React, {useEffect, useState} from 'react';
import TodoForm from './TodoForm.js';
import Todo from './Todo.js';


function TodoList(){
    const [todos, setTodos] = useState([])
    const [taskDone, setTaskDone] = useState(0)

    useEffect(() => {
        if(localStorage.getItem('todoList')){
            console.log(JSON.parse(localStorage.getItem('todoList')))
            setTodos(JSON.parse(localStorage.getItem('todoList')))
            setTaskDone(JSON.parse(localStorage.getItem('taskDone')))    
        }
        console.log("b")   
    }, [])

    const setLocalStorage = (key, value) => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    const addTodo = todo => {
        const newTodos = [...todos, todo];
        setLocalStorage('todoList', newTodos)
        setLocalStorage('taskDone', taskDone)
        setTodos(newTodos)
    }
    

    const updateTodo = (todoId, newValue) => {
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = (id) => {
        const removeArray = [...todos].filter(todo => {
            if(todo.id === id && todo.isComplete){
                setTaskDone(taskDone - 1)
                setLocalStorage('taskDone', taskDone)
            }
            return todo.id !== id
        });
        setLocalStorage('todoList', removeArray)
        setLocalStorage('taskDone', taskDone)
        setTodos(removeArray);
    }


    const completeTodo = (id) => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
                if(todo.isComplete){
                    setTaskDone(taskDone + 1)
                    setLocalStorage('taskDone', taskDone+1)
                }else if(!todo.isComplete){
                    setTaskDone(taskDone - 1)
                    setLocalStorage('taskDone', taskDone-1)
                }
            }
            return todo
        })
        setLocalStorage('todoList', updatedTodos)
        
        setTodos(updatedTodos);
    }
    
     return <div>
                <h1>What's the plan for today ?</h1>
                <div id='counter-container'>
                    <h3>To Do : {todos.length - taskDone}</h3>
                    <h3>Done : {taskDone}</h3>
                </div>
                
                <TodoForm onSubmit={addTodo} placeholder="add todo" />
                <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
             </div>
    
}

export default TodoList