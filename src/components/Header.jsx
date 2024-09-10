import { useState } from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";


const Header = () => {
  const [isOpen, setOpen] = useState(false);
 

  return (
    <header className="py-8 bg-white bg-gradient fixed top-0 right-0 left-0 z-40 p-4 border-y">
      <div className="w-[90%] mx-auto lg:flex md:flex justify-between hidden ">
        <img src={logo} alt="" className="w-[235px] h-[43px]" />
        <nav className="pt-2">
          <NavLink
            to="/"
            className="text-[#0C0814]/90 font-serif hover:text-[#331000] hover:font-[700] mr-10 text-[18px]"
          >
            Home
          </NavLink>
          <NavLink
            to="/fund-modal/0"
            className="text-[#0C0814]/90 font-serif hover:text-[#331000] hover:font-[700] mr-10 text-[18px]"
          >
            Fund
          </NavLink>
          <NavLink
            to="/create-proposal"
            className="text-[#0C0814]/90 font-serif hover:text-[#331000] hover:font-[700] mr-10 text-[18px]"
          >
            Submit Proposal
          </NavLink>
          <NavLink
            to="/fund-modal/:id"
            className="text-[#0C0814]/90 font-serif  hover:text-[#331000] hover:font-[700] mr-10 text-[18px]"
          >
            Check Proposal
          </NavLink>
          <NavLink
            to="/about-us"
            className="text-[#0C0814]/90 font-serif hover:text-[#331000] hover:font-[700] mr-10 text-[18px]"
          >
            About us
          </NavLink>
           {/* <NavLink
            to="/create-community"
            className="text-[#0C0814]/90 font-serif  hover:text-[#331000] hover:font-[700] text-[18px]"
          >
            Create Community
          </NavLink>  */}
        </nav>
        <w3m-button />
      </div>
      <div className="w-[95%] mx-auto flex justify-between lg:hidden md:hidden relative">
        <img src={logo} alt="" className="w-[185px] h-[43px]" />
        <Hamburger toggled={isOpen} toggle={setOpen} color="#427142" direction="right" />
        {isOpen && (<nav className="flex flex-col bg-white p-8 py-12 h-[100vh] w-[100%] absolute top-20 left-0 bg-baseBlack/70 z-50">
          <NavLink
            to="/"
            className="text-[#0C0814]/90 hover:text-[#331000] hover:font-[700] mb-6 text-[18px]"
          >
            Home
          </NavLink>
          <NavLink
            to="/fund-modal/0"
            className="text-[#0C0814]/90 hover:text-[#331000] hover:font-[700] mb-6 text-[18px]"
          >
            Fund
          </NavLink>
          <NavLink
            to="/create-proposal"
            className="text-[#0C0814]/90  hover:text-[#331000] hover:font-[700] mb-6 text-[18px]"
          >
            Submit Proposal
          </NavLink>
          <NavLink
            to="/fund-modal/:id"
            className="text-[#0C0814]/90  hover:text-[#331000] hover:font-[700] mb-6 text-[18px]"
          >
            Check Proposal
          </NavLink>
          <NavLink
            to="/about-us"
            className="text-[#0C0814]/90  hover:text-[#331000] hover:font-[700] mb-6 text-[18px]"
          >
            About us
          </NavLink>
        {/* <NavLink
          to="/create-community"
          className="text-[#0C0814]/90  hover:text-[#331000] hover:font-[700] text-[18px]"
        >
          Create Community
        </NavLink>  */}
          <div className="mt-6">
            <w3m-button />
          </div>
        </nav>)}
      </div>
    </header>
  );
};

export default Header;
