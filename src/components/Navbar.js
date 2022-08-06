import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ searchText }) => {

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    searchText(text);
  }

  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
      <nav className="py-3 h-[70px]">
        <div className='flex justify-between items-center h-full'>
          <p className='font-semibold text-xl'>Image Gallery</p>
          <form onSubmit={onSubmit} className='hidden sm:w-[50%] sm:h-full sm:flex sm:items-center'>
            <input onChange={e => setText(e.target.value)} type='text' className='w-full h-[80%] rounded border-2 border-gray-200 leading-tight placeholder:pl-2 placeholder:text-lg focus:outline-none focus:border-[#FAD02C]' placeholder='search...'></input>
            <button className='bg-[#FAD02C] h-[75%] w-[100px] rounded font-semibold'>Search</button>
          </form>
          <ul className='hidden lg:flex justify-between'>
            <li >
              <a className='pl-5 hover:text-[#90ADC6] font-semibold cursor-pointer transition'>
                Home
              </a>
            </li>
            <li>
              <a className='pl-5 hover:text-[#90ADC6] font-semibold cursor-pointer transition'>
                Source
              </a>
            </li>
            <li>
              <a className='pl-5 hover:text-[#90ADC6] font-semibold cursor-pointer transition'>
                Contact
              </a>
            </li>
            <li>
              <a className='pl-5 hover:text-[#90ADC6] font-semibold cursor-pointer transition'>
                About
              </a>
            </li>
          </ul>

        <div onClick={handleClick} className='lg:hidden z-10 hover:text-[#90ADC6] cursor-pointer transition'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        </div>

          <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#E9EAEC] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl hover:text-[#90ADC6] cursor-pointer transition '>Home</li>
            <li className='py-6 text-4xl hover:text-[#90ADC6] cursor-pointer transition '>Source</li>
            <li className='py-6 text-4xl hover:text-[#90ADC6] cursor-pointer transition '>Contact</li>
            <li className='py-6 text-4xl hover:text-[#90ADC6] cursor-pointer transition '>About</li>
          </ul>

      </nav>
  )
}

export default Navbar;