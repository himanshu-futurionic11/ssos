import { Sidebar } from 'flowbite-react'
import React from 'react'

const SideBar = ({setSelect}) => {
  return (
    <div className="w-fit ">  
    <Sidebar aria-label="Sidebar with multi-level dropdown example " className='sticky z-10 top-0'>
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item
          href="#"
        >
          Dashboard
        </Sidebar.Item>
        <Sidebar.Collapse
          label="Client Entry"
        >
          <Sidebar.Item >
            Client Details
          </Sidebar.Item>
        </Sidebar.Collapse>
        
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
  </div>
    
  )
}

export default SideBar