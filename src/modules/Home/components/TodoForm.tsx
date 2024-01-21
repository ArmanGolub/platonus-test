import React from 'react'
import { todoApi } from '../../../api/todoApi'
import { useState } from 'react'

type Props = {
}

const TodoForm = (props: Props) => {

    const [text, setText] = useState('')
    const [addTodos, { }] = todoApi.useAddTodosMutation()

    const handleAction = () => {
        if (text.trim().length) {
            addTodos({
                id: String(new Date().valueOf()),
                title: text,
                completed: false
            })
            setText('');
        }
    }

    return (
        <div className='flex'>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='add todo'

                className='bg-white rounded-md h-14 w-full shadow-md outline-none px-4 text-xl'></input>
            <button
                onClick={() => handleAction()}
                className='ml-4 bg-sky-600 font-bold px-6 rounded-md text-white'>
                SAVE
            </button>
        </div>
    )
}

export default TodoForm