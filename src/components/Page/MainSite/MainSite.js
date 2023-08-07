import React from "react";
import Header from "../../Component/Header/Header";
import Menu from "../../Component/Navbar/Menu";
import HomePage from "../Home/HomePage";
import { Button } from "flowbite-react";
import { HiOutlineArrowLeft } from 'react-icons/hi';

const MainSite = () => {
  return (
    <div>
      {/* <Menu/> */}
      {/* <Header/> */}
      <div>
        <Button className="ml-10 mt-10 -mb-10  " ><a className="flex" href="https://ssos.co.in/" ><HiOutlineArrowLeft className="mx-2 h-5 w-5" />Back to Main Site</a></Button>
      </div>

      <HomePage />
    </div>
  );
};

export default MainSite;
