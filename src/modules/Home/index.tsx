import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoItems from './components/TodoItems'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/todoSlice'
import { todoApi } from '../../api/todoApi'



type Props = {}

const Home = (props: Props) => {

    const [text, setText] = useState('')
    const [addTodos, { }] = todoApi.useAddTodosMutation()

    const handleAction = () => {
        if (text.trim().length) {
            addTodos({
                id: new Date().valueOf(),
                text: text,
                completed: false
            })
            setText('');
        }
    }

    return (
        <div className='w-full flex justify-center mt-4'>
            <div className='lg:w-[50%]'>
                <TodoForm value={text} updateText={setText} hanldeAction={handleAction} />
                <TodoItems></TodoItems>

            </div>
        </div>
    )
}

export default Home 