import React from 'react'
import Todo from '../../../types/todo'
import { todoApi } from '../../../api/todoApi'

type Props = {
    todo: Todo,
    handleRemove: Function
}

const TodoItem = ({todo, handleRemove}: Props) => {
    const [updateTodos, {}] = todoApi.useUpdateTodosMutation()

    
    const toggleComplete = (todo: Todo) => {
        updateTodos({...todo, completed: !todo.completed})
    }

    return (
        <div className={'relative bg-white rounded-md py-4 mt-6 shadow-md px-4 text-xl font-semibold '}>
            <div className='pr-4 break-all mr-6'>
                <span className={todo.completed ? 'line-through text-gray-500 ' : 'text-gray-700 '}>{todo.text}</span> 
            </div>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo)} className='absolute right-8 top-[18px]'/>
            <button onClick={()=> handleRemove(todo)} className='absolute right-4 top-2 text-red-600'>x</button>
        </div>
    )
}

export default TodoItem