import React from 'react'
import Header from '../widgets/Header'
import Router from '../router/index'
import { BrowserRouter } from 'react-router-dom'

type Props = {}

const Layout = (props: Props) => {
  return (
    <BrowserRouter>
      <div className='w-full h-full flex-row'>
        <Header/>
        <Router></Router>
      </div>
    </BrowserRouter>
  )
}

export default Layout