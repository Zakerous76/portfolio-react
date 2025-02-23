import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 mt-5 flex items-center justify-between py-6">
      <div className=" flex flex-shrink-0 items-center">
        <img
          className="ml-2 w-10 transition-all duration-300 hover:scale-125"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin className="transition-all duration-300 hover:scale-125" />
        <FaGithub className="transition-all duration-300 hover:scale-125" />
        <FaInstagram className="transition-all duration-300 hover:scale-125" />
        <FaXTwitter className="transition-all duration-300 hover:scale-125" />
      </div>
    </nav>
  );
};

export default Navbar;
