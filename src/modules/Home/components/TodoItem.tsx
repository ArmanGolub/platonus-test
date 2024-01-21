import React from 'react'
import Todo from '../../../types/todo'
import { todoApi } from '../../../api/todoApi'

type Props = {
    todo: Todo,
}

const TodoItem = ({ todo }: Props) => {
    const [updateTodos, { }] = todoApi.useUpdateTodosMutation()
    const [deleteTodos, { }] = todoApi.useDeleteTodosMutation()


    const handleRemove = (todo: Todo) => {
        deleteTodos(todo.id)
    }

    const toggleComplete = (todo: Todo) => {
        updateTodos({ ...todo, completed: !todo.completed })
    }

    return (
        <div className={'relative bg-white rounded-md py-4 mt-6 shadow-md px-4 text-xl font-semibold '}>
            <div className='break-all mr-10 leading-9'>
                <span className={todo.completed ? 'line-through text-gray-500 ' : 'text-gray-700 '}>
                    {todo.title}
                </span>
            </div>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo)}
                className='absolute right-8 top-[17px]' />

            <button
                onClick={() => handleRemove(todo)}
                className='absolute right-4 top-2 text-red-600'>
                x
            </button>
        </div>
    )
}

export default TodoItem