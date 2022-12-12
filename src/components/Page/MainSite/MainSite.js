import React from 'react'
import Header from '../../Component/Header/Header'
import Menu from '../../Component/Navbar/Menu'
import HomePage from '../Home/HomePage'

const MainSite = () => {
  return (
    <div>
        <Menu/>
   <Header/>
   <HomePage/>
    </div>
  )
}

export default MainSite