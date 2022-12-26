import { Card } from 'flowbite-react'
import React from 'react'
import { clientData } from '../../../Utils/mockData'

const ClientList = () => {
  return (
    <div className='mt-10'>
        <h1 className='font-bold  text-3xl  text-sky-600 text-center'>Our Client</h1>
        <div className="grid grid-cols-3 gap-y-1 gap-4  mt-10 place-items-center">
        {clientData.map((d) => (
          <div className="max-w-xs  p-0">
            <Card 
                imgAlt="Meaningful alt text w-1/3 for an image that is not purely decorative"
                href={d.href}
                style={{height:"400px",marginBottom:'50px'}}
                imgSrc={d.imsrc}
                >
                <h5 className="text-md font-bold   text-sky-600 dark:text-white">
                    {d.title}
                </h5>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClientList