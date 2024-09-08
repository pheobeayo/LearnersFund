
import logo from "../assets/whitelogo.svg"
import { FaDiscord } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      className="bg-[#0C0814] text-[#F8F8FA] bg-no-repeat py-8 px-2"
      
    >
      <div className="lg:w-[90%] md:w-[90%] w-[100%] mx-auto flex flex-col">
      <div className="lg:w-[40%] md:w-[40%] w-[100%] ml-auto my-6 flex flex-col lg:items-end lg:text-right md:items-end md:text-right text-center items-center">
        <img src={logo} alt="" className="w-[295px] h-[60px] mb-4"/>
        <p className="lg:w-[80%] md:w-[80%] w-[100%]">LearnersFund</p>
        <p className="lg:w-[80%] md:w-[80%] w-[100%]"> Empowering Minds, Empowering Futures</p>
      </div>
      <div className="flex items-center justify-between flex-col lg:flex-row md:flex-row text-center lg:text-left md:text-left">
        <p className="mb-4">&copy; 2024 LearnersFund</p>
        <div className="flex items-center justify-between flex-col lg:flex-row md:flex-row">
          <p className="lg:mr-8 md:mr-8 mb-4">privacy Policy</p>
          <p className="lg:mr-8 md:mr-8 mb-4">Terms</p>
          <p className="mb-4">Contact Us</p>
        </div>
        <div className="flex items-center mb-4">
          <FaXTwitter className="mr-2 text-xl"/>
          <FaDiscord className="mr-2 text-xl" />
          <MdMailOutline className="text-xl" />
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
