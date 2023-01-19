import { Table } from 'flowbite-react'
import React from 'react'
import { useSelector } from 'react-redux';
import { delhiRowData,hyderabadRowData } from "../../../Utils/mockData";


const ClientDetail = ({location}) => {
    const {userInfo,userId}=useSelector(state=>state.auth)
  return (
    <div>
        <Table striped={true} className='border-2 mb-20' >
            <Table.Head>
                <Table.HeadCell className='border-r-2 w-1/2'>
                Particulars/Details
                </Table.HeadCell>
                <Table.HeadCell className='w-1/2'>
                Description
                </Table.HeadCell>
            </Table.Head>
        <Table.Body className="divide-y">
            
            {(userInfo==="cariot") && (location==="Delhi") && delhiRowData.map(({id,heading,detail})=>(
                <Table.Row id={id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                 <Table.Cell id={id} className="whitespace-nowrap border-r-2 w-1/2 font-medium text-gray-900 dark:text-white">
                     {heading}
                 </Table.Cell>
                 <Table.Cell id={id} className='w-1/2'>
                     {detail}
                 </Table.Cell>
                </Table.Row>
            ))}  
            {(userInfo==="cariot") && (location==="Hyderabad") && hyderabadRowData.map(({id,heading,detail})=>(
                <Table.Row id={id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                 <Table.Cell id={id} className="whitespace-nowrap border-r-2 w-1/2 font-medium text-gray-900 dark:text-white">
                     {heading}
                 </Table.Cell>
                 <Table.Cell  id={id} className='w-1/2' >
                     {detail}
                 </Table.Cell>
                </Table.Row>
            ))}  
        </Table.Body>
        </Table>
    </div>
  )
}

export default ClientDetail