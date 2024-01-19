import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../modules/Home'
import SecondPage from '../modules/SecondPage'

type Props = {}

const Router = (props: Props) => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/secondpage' element={<SecondPage/>}/>
    </Routes>
  )
}

export default Router