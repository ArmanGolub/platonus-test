import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoItems from './components/TodoItems'
import { todoApi } from '../../api/todoApi'



type Props = {}

const Home = (props: Props) => {
    return (
        <div className='w-full flex justify-center mt-4'>
            <div className='lg:w-[50%]'>
                <TodoForm />
                <TodoItems></TodoItems>
            </div>
        </div>
    )
}

export default Home 