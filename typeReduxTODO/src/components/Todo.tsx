import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import '../css/todo.css'
import { todoType } from '../types/types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo } from '../redux/todoSlice';

interface todo {
    todo: todoType
}
function Todo({ todo }: todo) {
    const [editable, setEditTable] = useState<boolean>(false);
    const { id, content } = todo;
    const [newTodo, setNewTodo] = useState<string>(content)
    const dispatch = useDispatch()
    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id))
    }
    const handleUpdateTodo = () => {
        const payload: todoType = {
            id: id,
            content: newTodo
        }
        dispatch(updateTodo(payload));
        setEditTable(false);
    }
    return (
        <div className='todo'>
            {
                editable ? <input type="text" style={{ width: '400px', border: 'none', borderBottom: '1px solid lightgray', outline: 'none', marginTop: '3px' }}
                    value={newTodo}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} />
                    : <div style={{ marginTop: '3px' }}>{content}</div>
            }
            <div className='icons'>
                <IoIosRemoveCircle onClick={handleRemoveTodo} style={{ marginRight: '10px' }} />
                {editable ? <FaCheckCircle onClick={handleUpdateTodo} /> : <FaEdit onClick={() => setEditTable(true)} />}

            </div>
        </div>

    )
}

export default Todo