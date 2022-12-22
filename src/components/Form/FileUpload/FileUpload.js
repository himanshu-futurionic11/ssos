import axios from 'axios';
import { Button, Label } from 'flowbite-react';
import { Formik } from 'formik';
import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import { initialValues } from './const';

const FileUpload = () => {
    const [location, setLocation] = useState('');
    const [yearName, setYearName] = useState(new Date());
    const [fileType, setFileType] = useState("");
    const [name, setName] = useState("");
    const [monthName, setMonthName] = useState(new Date());
    const [file, setFile] = useState();
    const formData=new FormData()
    const handleChange=async(e)=>{
      console.log(e.target.files[0].type);
      setName(e.target.files[0].name)
      setFile(e.target.files[0])
      
     }

    const handleSubmit=async()=>{
      formData.append("file",file);
      formData.append("location",location);
      formData.append("fileType",fileType);
      formData.append("month",monthName.getMonth());
      formData.append("year",yearName.getFullYear());
      formData.append("name",name);
      console.log(formData.entries().next().value[1].name);
  
      const url = 'http://localhost:8900';
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      
     axios.post(
        `${url}/add-files`,formData).then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
        
      
    }
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      encType='multipart/form-data'
    >
      {({ handleSubmit, isSubmitting }) => (
        
          <div className=" items-center  mt-20 mb-10  bg-gray-50 dark:bg-gray-900">
          <div className=" h-full  mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <div className=" overflow-y-auto md:flex-row">
              <main className="items-center justify-center  sm:px-20">
                <form
                  className="w-full"
                  autoComplete="off"
                  onSubmit={handleSubmit}   
                >
                    <div
                    className='h-40 pt-12'
                    >
                        <h1   className="mb-4 text-xl text-center font-semibold text-black dark:text-gray-200 ">
                           Upload File 
                        </h1>
                    </div>
                    <div >
                        <div className='grid grid-cols-6 gap-2 place-items-center mt-10 mb-10'>
                        <select
                            id="underline_select"
                            value={location}
                            onChange={(e)=>{setLocation(e.target.value)}}
                            className=" py-2.5  w-full  text-md  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                        >
                            <option selected>Location</option>
                            <option value='Delhi'>Delhi</option>
                            <option value='Hyderabad'>Hyderabad</option>
                            
                            
                        </select>
                        <Label >
                          <span className='mt-15 w-30'>Month : </span> 
                        
                        </Label>
                        <div>
                        <ReactDatePicker
                          selected={monthName}
                          className=' border-0 border-b-2 border-gray-200 '
                          onChange={(date) => {setMonthName(date)}}
                          dateFormat="MM"
                          showMonthYearPicker
                          showFullMonthYearPicker
                        />
                        </div>
                        <Label >
                          <span className='mt-10 w-30'>Year : </span> 
                        
                        </Label>
                        <div>
                        <ReactDatePicker
                          selected={yearName}
                          className=' border-0 border-b-2 border-gray-200 '
                          onChange={(date) => setYearName(date)}
                          dateFormat="yyyy"
                          showYearPicker
                          showFullYearPicker
                        />
                        </div>
                        <select
                          id="underline_select"
                          value={fileType}
                          onChange={(e)=>{setFileType(e.target.value)}}
                          className=" py-2.5  w-auto  text-md  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                        >
                          <option selected>File Type</option>
                          <option  value="PF">PF</option>
                          <option  value="ESIC">ESIC</option>
                          <option  value="Muster Roll" >Muster Roll</option>
                          <option  value="Wage Register">Wage Register</option>
                        </select>
                        </div>
                        <div className="mt-10 text-center pb-10 pt-10 border-2">
                        <input type="file" id="file" name="file" accept="application/*" onChange={handleChange} />
                        </div>
                        
                        <Button
                            className="mt-5 mb-5"
                            type="submit"
                            disabled={isSubmitting}
                        >
                        Submit
                        </Button>
                    </div>
                </form>
              </main>
            </div>
          </div>
        </div>
      )}
    </Formik>
  )
}

export default FileUpload