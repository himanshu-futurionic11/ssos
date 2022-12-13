import axios from 'axios'
import { Table } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import FileUpload from '../../Form/FileUpload/FileUpload'
import Filtering from '../Filtering/Filtering'

const CompanyFile = () => {
    const url = 'http://127.0.0.1:5500/filedata.json';
    const [searchLocation, setSearchLocation] = useState("");
    const [searchYear, setSearchYear] = useState("");
    const [searchMonth, setSearchMonth] = useState("");
    const [searchFileType, setSearchFileType] = useState("");
    const [monthName, setMonthName] = useState(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);
    const [data, setdata] = useState([]);
  useEffect(() => {
    const fetching=async()=>{
        
        const {data} = await axios.get(`${url}/file`)
        setdata(data);
        
      }
      
        fetching(); 
      
  }, [])
  const handleSearch=async(month,year,location,fileType)=>{
    console.log(month,year,location,fileType);
    if (month!=="") {
        if (year!=="") {
            if (location!=="") {
                if (fileType!=="") {
                    const {data} = await axios.get(`${url}/file?month=${month}&year=${year}&location=${location}&fileType=${fileType}`)
                    setdata(data);
                } else {
                    const {data} = await axios.get(`${url}/file?month=${month}&year=${year}&location=${location}`)
                    setdata(data);
                }
                
            } else {
                if (fileType!=="") {
                    const {data} = await axios.get(`${url}/file?month=${month}&year=${year}&fileType=${fileType}`)
                    setdata(data);
                } else {
                    const {data} = await axios.get(`${url}/file?month=${month}&year=${year}`)
                    setdata(data);
                }
                
            }
        } else {
            if (location!=="") {
                if (fileType!=="") {
                    const {data} = await axios.get(`${url}/file?month=${month}&location=${location}&fileType=${fileType}`)
                    setdata(data);
                } else {
                    const {data} = await axios.get(`${url}/file?month=${month}&location=${location}`)
                    setdata(data);
                }
                
            } else {
                if (fileType!=="") {
                    const {data} = await axios.get(`${url}/file?month=${month}&fileType=${fileType}`)
                    setdata(data);
                } else {
                    const {data} = await axios.get(`${url}/file?month=${month}`)
                    setdata(data);
                }
                
            }
        }
        
    } else {
        if (year!=="") {
            if (location!=="") {
                if (fileType!=="") {
                    const {data} = await axios.get(`${url}/file?year=${year}&location=${location}&fileType=${fileType}`)
                    setdata(data);
                } else {
                    const {data} = await axios.get(`${url}/file?year=${year}&location=${location}`)
                    setdata(data);
                }
                
            } else {
                if (fileType!=="") {
                    const {data} = await axios.get(`${url}/file?year=${year}&fileType=${fileType}`)
                    setdata(data);
                } else {
                    const {data} = await axios.get(`${url}/file?year=${year}`)
                    setdata(data);
                }
                
            }
        } else {
            if (location!=="") {
                if (fileType!=="") {
                    const {data} = await axios.get(`${url}/file?location=${location}&fileType=${fileType}`)
                    setdata(data);
                } else {
                    const {data} = await axios.get(`${url}/file?location=${location}`)
                    console.log("hi");
                    // setdata(data=>data.filter(x=>x.location===location));
                    setdata(data)
                    
                }
                
            } else {
                if (fileType!=="") {
                    const {data} = await axios.get(`${url}/file?fileType=${fileType}`)
                    setdata(data);
                } 
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
            {data.map(({id,month,year,name,fileType,location,formData})=>(
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
                 <Table.Cell></Table.Cell>
                </Table.Row>
            ))}  
        </Table.Body>
        </Table>
        <FileUpload />
    </div>
  )
}

export default CompanyFile