import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props){
    const [input, setInput] = useState("");

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput("");

        props.onSubmit({
            id: new Date().getTime(),
            text: input
        })
    }

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    }

    return (
        
            <form className='todo-form' onSubmit={handleSubmit}>
                <input type="text" placeholder='add todo' value={input} name="text" className='todo-input' onChange={handleChange} ref={inputRef}>

                </input>
                <button className='todo-button'>Add ToDo</button>
            </form>
        
    )
        
}



export default TodoForm;