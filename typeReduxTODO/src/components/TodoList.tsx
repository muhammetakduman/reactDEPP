import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { todoType } from '../types/types'

function TodoList() {

    const { todos } = useSelector((state: RootState) => state.todo)
    return (
        <div>
            {
                todos && todos.map((todo: todoType) => (
                    <Todo key={todo.id} todo={todo} />
                ))
            }

        </div>
    )
}

export default TodoList