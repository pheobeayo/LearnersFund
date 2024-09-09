import  { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { CgHomeAlt } from "react-icons/cg";
import { BiBox } from "react-icons/bi";
import { GoProjectSymlink } from "react-icons/go";
import { TbSettings } from "react-icons/tb";
import { FcCollaboration } from "react-icons/fc";
import { RxUpdate } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg'

const MobileSidebar = () => {
  const [isOpen, setOpen] = useState(false);


  const activeStyle = {
    borderLeft: '1px solid #593A9E',
    borderRight: '1px solid #593A9E',
    width: '100%',
    padding: '20px'
  };

  return (
    <header className="lg:hidden md:hidden flex justify-between my-4 relative">
            <img src={logo} alt="" className="w-[150px] my-4" />
      <Hamburger toggled={isOpen} toggle={setOpen} color="#427142" direction="right"/>
      {isOpen && (
        <div className="bg-white text-[#331000] p-8 py-12 h-[100vh] w-[100%] absolute top-20 left-0 bg-baseBlack/70 z-50">
            <w3m-button />
          <NavLink
            to="/dashboard"
            className="text-[14px] text-[#331000] flex items-center py-4 my-4 px-4 hover:text-[#593A9E]"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            end
          >
            <CgHomeAlt className="mr-4" />
            Dashboard
          </NavLink>
          <NavLink
            to="community"
            className="text-[14px] text-[#331000]  flex items-center py-4 mb-4 px-6  hover:text-[#593A9E]"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            < GoProjectSymlink className="mr-4" /> Community
          </NavLink>
          <NavLink
            to="fund"
            className="text-[14px] text-[#331000]  flex items-center py-4 mb-4 px-6  hover:text-[#593A9E]"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            <FcCollaboration className="mr-4" />
            Fund
          </NavLink>
          <NavLink
            to="submit-proposal"
            className="text-[14px] text-[#331000]  flex items-center py-4 mb-4 px-6  hover:text-[#593A9E]"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            <BiBox className="mr-4" /> Submit Proposal
          </NavLink>
          <NavLink
            to="join-community"
            className="text-[14px] text-[#331000]  flex items-center py-4 mb-4 px-6  hover:text-[#593A9E]"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            < RxUpdate className="mr-4" /> Join Community
          </NavLink>
          <button className="text-[14px] text-[#331000]  flex items-center py-4 mb-4 px-6  hover:text-[#593A9E]">
            <TbSettings className="mr-4" /> Leave Community
          </button>
        </div>
      )}
    </header>
  );
};

export default MobileSidebar;
