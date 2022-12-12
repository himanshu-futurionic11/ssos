import { Carousel } from 'flowbite-react'
import React from 'react'
import { data } from '../../../Utils/mockData'

const Header = () => {
  
  return (
    <>
   
  <div className="h-56 sm:h-64 my-4 xl:h-80 2xl:h-96 mx-8">
  <Carousel slideInterval={5000} slide={false}>
   {
    data.map(d =>  <div style={{ 
      backgroundImage: `url(${d.image})` 
    }} className="bg-center text-white h-full bg-cover flex flex-col text-4xl font-bold  items-center justify-center  dark:bg-gray-700 dark:text-white">
      <h3>{d.heading}</h3>
    </div>)
   }
   
  </Carousel>
</div>
    </>
  )
}

export default Header