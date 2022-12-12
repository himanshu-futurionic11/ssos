import React from 'react'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  return (
    <div className='flex mt-10 pt-5 bg-gray-200/60 w-full'>
      <div className='w-1/2'>
      <h1 className="text-2xl font-bold   text-sky-600 dark:text-white">
        Contact Us
      </h1>
      <Link className='text-md font-bold   text-sky-600 dark:text-white'>Shining Star Outsource Services Private Limited</Link>
      <h6 className='text-md font-bold  dark:text-white' >Facility Management Services Provider</h6>
        <p>Rahul Kaushik - Business Head</p>
        <p>Plot No 5, Sector 15,Part 1,</p>
        <p>Gurgaon</p>
        <p>Haryana</p>
        <p>122001</p>
        <p>India</p>
        <p className='font-light text-sm'>Contact No:+91-9999639635</p>
        <p className='font-light text-sm'>Email:contact@ssos.co.in</p>
      </div>
       
      <div className='w-1/2'>
        <img src='http://www.ssos.co.in/images/iso9001.png'/>
      </div>
        
    </div>
  )
}

export default ContactUs