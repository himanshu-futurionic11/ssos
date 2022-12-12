import { Button, Label } from "flowbite-react";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";

const Filtering = ({handleSearch}) => {
  const [year, setYear] = useState(new Date());
  const [searchYear, setSearchYear] = useState("");
  const [searchMonth, setSearchMonth] = useState("");
  const [month, setMonth] = useState(new Date());
  const [location, setLocation] = useState("");
  const [fileType, setFileType] = useState("");
  const handleSubmit=(e)=>{
    
    handleSearch(searchMonth,searchYear,location,fileType)
  }
    
  return (
    <div
    >
      <div className=" grid grid-cols-5 gap-4 place-items-center mt-10 mb-10">
        
          <Label className="flex items-center gap-1">
            <span className="text-sm whitespace-nowrap">Filter by :</span>

              <select
                id="underline_select"
                value={location}
                onChange={(e)=>{setLocation(e.target.value)}}
                className=" py-2.5  w-full  text-md  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
              >
                <option value="" selected>Location</option>
                <option  value="Hyderabad">Hyderabad</option>
                <option  value="Delhi">Delhi</option>
              </select>
          </Label>
          <div>
          <ReactDatePicker
            selected={month}
            className='mt-1 border-0 border-b-2 border-gray-200 '
            onChange={(date) => {setMonth(date);setSearchMonth(date.getMonth())}}
            dateFormat="MM"
            placeholderText="Month"
            showMonthYearPicker
            showFullMonthYearPicker
          />
          </div>
          <div>
          <ReactDatePicker
            selected={year}
            className='mt-1 border-0 border-b-2 border-gray-200 '
            onChange={(date) => {setYear(date);setSearchYear(date.getFullYear())}}
            dateFormat="yyyy"
            placeholderText="Year"
            showYearPicker
            showFullYearPicker
          />
          </div>
          <div>
          <select
                id="underline_select"
                value={fileType}
                onChange={(e)=>{setFileType(e.target.value)}}
                className=" py-2.5  w-full  text-md  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
              >
                <option value="" selected>File Type</option>
                <option  value="PF">PF</option>
                <option  value="ESIC">ESIC</option>
                <option  value="Muster Roll" >Muster Roll</option>
                <option  value="Wage Register">Wage Register</option>
              </select>
          </div>
        <div className="flex items-center gap-4">
          <Button onClick={handleSubmit} className="px-2 " gradientDuoTone="cyanToBlue">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filtering;
