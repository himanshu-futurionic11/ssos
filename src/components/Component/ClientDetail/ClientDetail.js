import { Table } from 'flowbite-react'
import React from 'react'
import { rowData } from '../../../Utils/mockData'

const ClientDetail = () => {
  return (
    <div>
        <Table striped={true} className='border-2 mb-20' >
            <Table.Head>
                <Table.HeadCell className='border-r-2'>
                Particulars/Details
                </Table.HeadCell>
                <Table.HeadCell>
                Description
                </Table.HeadCell>
            </Table.Head>
        <Table.Body className="divide-y">
            {rowData.map(({id,heading,detail})=>(
                <Table.Row id={id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                 <Table.Cell id={id} className="whitespace-nowrap border-r-2 font-medium text-gray-900 dark:text-white">
                     {heading}
                 </Table.Cell>
                 <Table.Cell id={id}>
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