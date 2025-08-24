import React from "react"
import { CONTACT } from "../constants"
import { FaLinkedin } from "react-icons/fa6"
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-5xl">
        Get In <span className="text-purple-400">Touch</span>
      </h1>
      <div className="text-center py-2 tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="underline">
          {CONTACT.email}
        </a>
        <div className="flex justify-center gap-5 my-9 text-2xl">
          <FaLinkedinIn
            className="transition-all duration-300 hover:scale-125"
            href="https://www.linkedin.com/in/zaker-amin/"
          />
          <FaGithub
            className="transition-all duration-300 hover:scale-125"
            href="https://github.com/Zakerous76"
          />
          <FaInstagram
            className="transition-all duration-300 hover:scale-125"
            href="https://www.instagram.com/mzakeramin/"
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
