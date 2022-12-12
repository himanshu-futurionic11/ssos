import { Navbar, Sidebar } from 'flowbite-react';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ClientDetail from '../../Component/ClientDetail/ClientDetail';
import CompanyFile from '../../Component/CompanyFile/CompanyFile';
import SideBar from '../../Component/SideBar/SideBar';

const Dashboard = () => {
  const isLogged=useSelector(state=>state.auth.isLogged)
  const [select, setSelect ] = useState(false);
  return (
    <div className='flex gap-4'>
      <SideBar setSelect={setSelect}/>
      <div>
      <div className='sticky z-10 top-0 '>
        <Navbar  className='mx-5 my-4'
          fluid={true}
          rounded={true}
        >
          <Navbar.Collapse></Navbar.Collapse>
      <div className="flex justify-end ">
        <Link className='text-cyan-700 flex justify-end' to='/'>Logout</Link>
      </div>
    </Navbar>
   
     </div>
      
      <ClientDetail/>
      <CompanyFile/>
      </div>
    </div>
  )
}

export default Dashboard