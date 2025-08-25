import React from "react"
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6"

const ContactIcons = () => {
  return (
    <>
      <a href="https://www.linkedin.com/in/zaker-amin/" target="_blank">
        <FaLinkedinIn className="transition-all duration-300 hover:scale-125" />
      </a>
      <a href="https://github.com/Zakerous76" target="_blank">
        <FaGithub className="transition-all duration-300 hover:scale-125" />
      </a>
      <a href="https://www.instagram.com/mzakeramin/" target="_blank">
        <FaInstagram className="transition-all duration-300 hover:scale-125" />
      </a>
    </>
  )
}

export default ContactIcons
