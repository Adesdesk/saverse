import React from "react";
import Link from 'next/link';
import Image from 'next/image'


function Footer() {
  return (

    <div className="bg-gray-900">
  <div className="max-w-2xl mx-auto text-white py-3">
    <div className="text-center">
      <h3 className="text-3xl mb-3">Saverse thrift administrator</h3>
      <p className="text-yellow-300">...thrift without a rift.</p>
      <div className="flex justify-center my-4">
        <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">

        <Image 
            src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
            alt="Icon"
            width={28}
            height={28}
        />
          <div className="text-left ml-3">
            <p className="text-xs text-gray-200">Download on</p>
            <p className="text-sm md:text-base">Google Play Store</p>
          </div>
        </div>
        <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">

        <Image 
            src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
            alt="Icon"
            width={28}
            height={28}
        />
          
          <div className="text-left ml-3">
            <p className="text-xs text-gray-200">Download on</p>
            <p className="text-sm md:text-base">Apple Store</p>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-8 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
      <p className="order-2 md:order-1 mt-4 md:mt-0">
      Saverse is an implementation of an original idea by Adeola David Adelakun
          <br></br>
      &copy; {new Date().getFullYear()} All rights reserved.
      </p>
      <div className="order-1 text-white md:order-2">
      <Link className="px-2" href='/developer'>About Adeola</Link>
        <span className="px-2 border-l">Privacy Policy</span>
      </div>
    </div>
  </div>
</div>

  );
}

export default Footer;
