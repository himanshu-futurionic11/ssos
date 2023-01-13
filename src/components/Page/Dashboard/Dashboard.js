import { Label, Navbar, Sidebar } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ClientDetail from '../../Component/ClientDetail/ClientDetail';
import CompanyFile from '../../Component/CompanyFile/CompanyFile';
import SideBar from '../../Component/SideBar/SideBar';
import FileUpload from '../../Form/FileUpload/FileUpload';

const Dashboard = () => {
  const isAdminLogged=useSelector(state=>state.admin.isAdminLogged)
  const [select, setSelect ] = useState(false);
  const [upload, setUpload] = useState("");
  const [location, setLocation] = useState("");
  useEffect(() => {
    
  }, [upload])
  
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
        <div className='mb-5'>
        <select
            id="underline_select"
            value={location}
            onChange={(e)=>{setLocation(e.target.value)}}
            className=" py-2.5  w-auto  text-md  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
          >
            <option value="" selected>Location</option>
            <option  value="Hyderabad">Hyderabad</option>
            <option  value="Delhi">Delhi</option>
          </select>
        </div>
          
          
      <ClientDetail location={location} />
      <CompanyFile location={location}/>
      {isAdminLogged && <FileUpload upload={upload} setUpload={setUpload} />}
      </div>
    </div>
  )
}

export default Dashboard