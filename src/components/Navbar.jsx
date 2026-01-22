import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-900 text-gray-300 flex items-center justify-between px-7 h-24 w-full'>
      <div className="material-symbols-outlined "> key </div>
      <a href="#">
        <button className='my-5 mx-2  flex rounded-3xl justify-between items-center ring-gray-300 ring cursor-pointer hover:bg-purple-700 '>

          <lord-icon className="w-10   "
            src="https://cdn.lordicon.com/jjxzcivr.json"
            trigger="hover"
            colors="primary:#fff,secondary:#fff"
          >
          </lord-icon>
          <span className='font-bold px-2'>GitHub</span>
        </button>
      </a>
    </nav>
  )
}

export default Navbar