import React from 'react'

type Props = {
    value: string,
    updateText: Function,
    hanldeAction: Function
}

const TodoForm = ({value, updateText, hanldeAction}: Props) => {

    return (
        <div className='flex'>
            <input  
            value={value}
            onChange={(e) => updateText(e.target.value)}
            placeholder='add todo'

            className='bg-white rounded-md h-14 w-full shadow-md outline-none px-4 text-xl'></input>
            <button  
            onClick={() => hanldeAction()}
            className='ml-4 bg-sky-600 font-bold px-6 rounded-md text-white'>
                SAVE
            </button>
        </div>
    )
}

export default TodoForm