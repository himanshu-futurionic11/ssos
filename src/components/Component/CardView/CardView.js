import { Card } from 'flowbite-react';
import React from 'react'
import { Link } from 'react-router-dom';
import { serviceData } from '../../../Utils/mockData';

const CardView = () => {
  return (
    <div className='mt-10'>
        <h1 className='font-bold  text-3xl  text-sky-600 text-center'>Our Services</h1>
        <div className="grid grid-cols-4 gap-y-1 gap-4  mt-10 place-items-center">
        {serviceData.map((d) => (
          <div className="max-w-xs  p-0">
            <Card 
            >
              <h5 className="text-md font-bold   text-sky-600 dark:text-white">
                {d.title}
              </h5>
              <p className="font-light text-md text-gray-500 dark:text-gray-400">
                {d.detail}
              </p>
              <div>
                <Link className='text-sky-600' to={d.link}>Read More</Link>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardView