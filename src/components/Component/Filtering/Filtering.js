import { Button, Label } from "flowbite-react";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";

const Filtering = ({handleSearch}) => {
  const [year, setYear] = useState(new Date());
  const [searchYear, setSearchYear] = useState(null);
  const [searchMonth, setSearchMonth] = useState(null);
  const [month, setMonth] = useState(new Date());
  
  const [fileType, setFileType] = useState("");
  const handleSubmit=(e)=>{
    console.log(searchMonth,searchYear,fileType);
    handleSearch(searchMonth,searchYear,fileType)
  }
    
  return (
    <div
    >
      <div className=" grid grid-cols-7 gap-4 place-items-center mt-10 mb-10">
        
      <Label className="flex items-center gap-1">
            <span className="text-sm whitespace-nowrap">Filter by :</span>
            </Label>
            <span>month</span>
          <div>
          <ReactDatePicker
            selected={month}
            className='mt-1 border-0 border-b-2 border-gray-200 '
            onChange={(date) => {if (date) {
              setMonth(date);setSearchMonth(date.getMonth())
            } else {
              setMonth(date);setSearchMonth(date)
            }}}
            dateFormat="MM"
            placeholderText="Month"
            isClearable={true}
            showMonthYearPicker
            showFullMonthYearPicker
          />
          </div>
          <span>year</span>
          <div>
          <ReactDatePicker
            selected={year}
            className='mt-1 border-0 border-b-2 border-gray-200 '
            onChange={(date) => {if (date) {
              setYear(date);setSearchYear(date.getFullYear())
            } else {
              setYear(date);setSearchYear(date)
            }
              }}
            dateFormat="yyyy"
            placeholderText="Year"
            isClearable={true}
          
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
