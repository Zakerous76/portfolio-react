import ContactIcons from "./ContactIcons"

const Navbar = () => {
  return (
    <nav className="mb-15 mt-5 flex items-center justify-between mx-6 py-6">
      <div className=" flex flex-shrink-0 items-center">
        <div className="flex items-center justify-center  transition-all duration-300 hover:scale-125">
          <span className="font-bold text-5xl select-none bg-gradient-to-r from-pink-100 via-pink-700 to-purple-200  bg-clip-text text-transparent">
            ZA
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl">
        <ContactIcons />
      </div>
    </nav>
  )
}

export default Navbar
