import React from 'react'
import stills from '../assets/STILLS.svg'

const Navbar = () => {
  return (
    <nav className=" absolute w-full flex justify-between items-center p-4">
      <div className="mr-4">
        <img src={stills} alt="Logo" className="h-8" />
      </div>
      <ul className="flex gap-10 mr-6">
        <li className="mr-4"><a href="/" className="text-white text-xl">home</a></li>
        <li className="mr-4"><a href="/products" className="text-white text-xl">products</a></li>
        <li className="mr-4"><a href="/contact" className="text-white text-xl">contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar