import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='h-14 text-2xl font-semibold w-full shadow-md flex items-center text-gray-700 bg-white
    pl-2 pb-1 justify-center'>
      <div className='container flex justify-between'>
        <Link to='..'>Todo</Link>
        <Link to='/secondpage'>About</Link>
      </div>
    </div>
  )
}

export default Header