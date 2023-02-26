import Image from 'next/image'
import React from 'react'
import { HiOutlineMoon } from "react-icons/hi";
import MobileAlternative from './MobileAlternative';
import Link from 'next/link';
import logo from './saverse_logo.png'

function Navbar() {

    return (
        <div className='w-full h-24 bg-gray-900'>
            <div className='flex justify-between items-center p-4 md:w-11/12 md:mx-auto'>
                <div>
                    <Image className='w-16 cursor-pointer' src={logo} alt="logo" />
                </div>
                <div className='hidden md:flex'>
                    <ul className='text-white flex space-x-4'>
                        <li className='font-normal p-1 cursor-pointer'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className='font-normal p-1 cursor-pointer'>
                            <Link href='/products'>About</Link>
                        </li>
                        <li className='font-normal p-1 cursor-pointer'>
                            <Link href='/users'>Guide</Link>
                        </li>
                        
                    </ul>
                </div>
                <div className='md:hidden'>
                    <div className='flex items-center space-x-2 text-white'>
                        <div className='p-1 rounded-lg border'>
                            <HiOutlineMoon className='cursor-pointer' size={21} />
                        </div>
                        <MobileAlternative />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar