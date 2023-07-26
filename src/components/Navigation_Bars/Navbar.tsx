import { useState } from 'react'
import { MdMenu, MdClose } from 'react-icons/md'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
      <>
          <div className="w-full sticky top-0 bg-white border border-gray-100 p-5">
          <div className="container flex justify-between items-center m-auto">
              <div className="">
                  <a href="#">Logo</a>
              </div>
              <nav className="max-md:hidden w-1/2 flex justify-between items-center">
                  <a href="#" className=''>Home</a>
                  <a href="#">About</a>
                  <a href="#">Contact</a>
              </nav>
              <div className="md:hidden cursor-pointer" onClick={() => setToggle(!toggle)}>{ !toggle? (<MdMenu />) : (<MdClose />) }</div>
          </div>
          </div>
          {toggle && (<div className='md:hidden absolute top-0 w-full min-h-screen bg-black bg-opacity-30'>
              <div className="fixed right-0 w-80 h-full flex flex-col bg-white">
                  <div className='p-4 cursor-pointer' onClick={()=>setToggle(!toggle)}><MdClose /></div>
                  <nav className='flex flex-col flex-end'>
                    <a className='p-4 border-b hover:bg-gray-300' href="#">Home</a>
                    <a className='p-4 border-b hover:bg-gray-300' href="#">About</a>
                    <a className='p-4 border-b hover:bg-gray-300' href="#">Contact</a>
                  </nav>
              </div>
          </div>)}
      </>
  )
}

export default Navbar

