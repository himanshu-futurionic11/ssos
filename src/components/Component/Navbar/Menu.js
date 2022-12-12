import { Navbar } from 'flowbite-react'
import React from 'react'

const Menu = () => {
 
  return (
   <div className='sticky z-10 top-0 '>
    <Navbar  className='mx-5 my-4'
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="/dashboard">
    <img
      src="logo.png"
      className="ml-10 h-12    "
      alt="SSOS Logo"
    />
  </Navbar.Brand>
  <div className="flex md:order-2">

  </div>
  <Navbar.Collapse>
    <Navbar.Link
    href='/dashboard'
    >
      Home
    </Navbar.Link>
    <Navbar.Link >
      About Us
    </Navbar.Link>
    <Navbar.Link >
      Services
    </Navbar.Link>
    <Navbar.Link >
      Clients
    </Navbar.Link>
    <Navbar.Link href='/login'>
      Compliance
    </Navbar.Link>
    <Navbar.Link>
      Career
    </Navbar.Link>
    <Navbar.Link >
      Contact Us
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
   
   </div>
  )
}

export default Menu
