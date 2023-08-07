import axios from 'axios'
import { Card } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { loginActions } from '../../../Store/Auth-Slice'
import { clientData, url } from '../../../Utils/mockData'

const ClientList = () => {
  const dispatch=useDispatch()
  const naviagte=useNavigate()
  const [data, setData] = useState([])
  useEffect(() => {
    const clientfetching=async()=>{
      const {data}= await axios.get(`${url}/get-clients`)
      setData(data)
      console.log(data);
    }
    clientfetching()
  }, [])
  
  return (
    <div className='mt-10'>
        <h1 className='font-bold  text-3xl  text-sky-600 text-center'>Our Client</h1>
        <div className="grid grid-cols-3 gap-y-1 gap-4  mt-10 place-items-center">
        {data.map((d) => (
          <div className="max-w-xs  p-0">
            <Card 
                imgAlt="Meaningful alt text w-1/3 for an image that is not purely decorative"
                onClick={()=>{
                  console.log("hi");
                  dispatch(loginActions.user({userInfo:d.name,userId:d.id}))
                  naviagte('/login', { replace: true });
                }}
                style={{height:"400px",marginBottom:'50px'}}
                imgSrc={`${url}/${d.imsrc}`}
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