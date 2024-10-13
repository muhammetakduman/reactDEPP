import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice'
import { todoType } from '../types/types';


function TodoCreate() {
    const [newTodo, setNewTodo] = useState<string>('')
    const dispatch = useDispatch();
    const handleCreateTodo = () => {
        if (newTodo.trim().length === 0) {
            alert('Lütfen bir todo girin')
            return;
        }
        const payload: todoType = {
            id: Math.floor(Math.random() * 999999),
            content: newTodo
        }
        dispatch(createTodo(payload));
        setNewTodo('');
    }

    return (
        <div className='todo-create'>
            <input value={newTodo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
                type="text" placeholder='Todo Giriniz' className='todo-input' />
            <button onClick={handleCreateTodo} className='create-button'>Kaydet</button>
        </div>
    )
}

export default TodoCreate