import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodos } from '../redux/todoSlice'

const Todo = () => {
    const [text, setText] = useState()

    const dispatch = useDispatch()
    const todoList = useSelector((state) => state.todos.list)
    const handleSubmitTodo = () => {
        if (text.trim() === "") return;
        dispatch(addTodos(text))
        setText("")
    }
    // console.log(todoList);

    return (
        <div>
            <input
                type="text"
                placeholder='Enter todo here'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleSubmitTodo}>Add todo</button>
            <div>
                {
                 todoList.map((todo, index)=>(
                    <li key={todo.id}>{todo.text} || {todo.completed}</li>
                 ))   
                }
            </div>
        </div>
    )
}

export default Todo
