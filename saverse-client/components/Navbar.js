import Image from 'next/image'
import React from 'react'
import { HiOutlineMoon } from "react-icons/hi";
import MobileAlternative from './MobileAlternative';
import Link from 'next/link';
import logo from './saverse_logo.png'

function Navbar() {

    return (
        <div className='w-full h-30 bg-gray-900'>
            <div className='flex justify-between items-center p-4 md:w-11/12 md:mx-auto'>
                <div className='relative'>
                    <Image className='w-16 cursor-pointer' src={logo} alt="logo" />
                    <p className='absolute mb-5 font-bold text-2xl bottom-0.5 left-16 text-white'>averse</p>
                    <div className=''>
                        <p className='font-normal ml-6 text-sm text-white'>Thrift without a rift</p>
                    </div>
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