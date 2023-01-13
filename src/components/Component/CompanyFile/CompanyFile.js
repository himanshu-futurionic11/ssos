import axios from 'axios'
import { Button, Table } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { url } from '../../../Utils/mockData'
import ViewModal from '../../Modal/VeiwModal'

import Filtering from '../Filtering/Filtering'

const CompanyFile = ({location}) => {
    const {userInfo}=useSelector(state=>state.auth.userInfo)
    const [monthName, setMonthName] = useState(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);
    const [data, setdata] = useState([]);
    const [filePath, setFilePath] = useState("");
    const [open, setOpen] = useState(false);
    const [fileName, setFileName] = useState("");
  useEffect(() => {
    const fetching=async()=>{
        
        setdata([]);
    // console.log("hi" ,data);
    //     console.log(data);
        
      }
      
        fetching(); 
      
  }, [location])
  const handleSearch=async(month,year,fileType)=>{
    if (month!==null) {
        if (year!==null) {
            if (fileType!=="") {
                const {data} = await axios.get(`${url}/get-filesBySearch?location=${location}&fileType=${fileType}&year=${year}&month=${month}`)
                    setdata(data);
                    console.log("hi" ,data);
                } else {
                    const {data} = await axios.get(`${url}/get-filesByYearMonth?location=${location}&year=${year}&month=${month}`)
                    setdata(data);
                    console.log("hi" ,data);
                }
        } else {
            if (fileType!=="") {
                    const {data} = await axios.get(`${url}/get-filesByMonthFileType?location=${location}&fileType=${fileType}&month=${month}`)
                    setdata(data);
                    console.log("hi" ,data);
                } else {
                    const {data} = await axios.get(`${url}/get-filesByMonth?location=${location}&month=${month}`)
                    setdata(data);
                    console.log("hi" ,data);
                }
        }
        
    } else {
        if (year!==null) {
          
                if (fileType!=="") {
                    const {data} = await axios.get(`${url}/get-filesByYearFileType?location=${location}&fileType=${fileType}&year=${year}`)
                    setdata(data);
                    console.log("hi" ,data);
                } else {
                    const {data} = await axios.get(`${url}/get-filesByYear?location=${location}&year=${year}`)
                    setdata(data);
                    console.log("hi" ,data);
                }
                
        } else {
          
                if (fileType!=="") {
                    const {data} = await axios.get(`${url}/get-filesByFileType?location=${location}&fileType=${fileType}`)
                    setdata(data);
                    console.log("hi" ,data);
                } else {
                    const {data} = await axios.get(`${url}/get-filesByLocation?location=${location}`)
                    console.log("hi");
                    // setdata(data=>data.filter(x=>x.location===location));
                    setdata(data);
                    console.log("hi" ,data);
                }
                
           
        }
        
    }
        
    
}

  return (
    <div>
        <Filtering  handleSearch={handleSearch} />
        <Table striped={true} className='border-2 mb-20' >
            <Table.Head>
                <Table.HeadCell className='border-r-2'>
                    Date
                </Table.HeadCell>
                <Table.HeadCell>
                    Location
                </Table.HeadCell>
                <Table.HeadCell>
                    File Name
                </Table.HeadCell>
                <Table.HeadCell>
                    File Type
                </Table.HeadCell>
                <Table.HeadCell>
                    Action
                </Table.HeadCell>
            </Table.Head>
        <Table.Body className="divide-y">
            {(userInfo==="cariot" || userInfo==="admin") &&data.map(({id,month,year,name,fileType,location,file})=>(
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                 <Table.Cell className="whitespace-nowrap border-r-2 font-medium text-gray-900 dark:text-white">
                     {monthName[month]}-{year}
                 </Table.Cell>
                 <Table.Cell>
                     {location}
                 </Table.Cell>
                 <Table.Cell>
                    {name}
                 </Table.Cell>
                 <Table.Cell>
                    {fileType}
                 </Table.Cell>
                 <Table.Cell>
                 <Button onClick={()=>{setOpen(true);setFilePath(file);setFileName(name)}} >Download</Button>
                 </Table.Cell>
                </Table.Row>
            ))}  
        </Table.Body>
        </Table>
        <ViewModal open={open} fileName={fileName} file={filePath} setOpen={setOpen} />
    </div>
  )
}

export default CompanyFile