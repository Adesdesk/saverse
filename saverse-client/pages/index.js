import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Inter } from 'next/font/google'
/*import '../styles/globals.css'*/
import styles from '@components/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Saverse</title>
        <meta name="description" content="Thrift without a rift." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
      </div>
      <div className="grid grid-cols-6 gap-1 bg-gradient-to-r from-slate-500 to-gray-200 h-screen">      
      {/*<div className="grid grid-cols-1 gap-12 lg:grid-cols-12 bg-gradient-to-r from-slate-500 to-gray-200 h-screen">*/}
      <div className="col-start-1 col-end-6 rounded-r-lg bg-gradient-to-r from-white to-gray-200 mx-2 my-2">
     
        {/*<div className="col-span-1 rounded-r-lg bg-gradient-to-r from-white to-gray-200 mx-2 my-2 lg:col-span-9">*/}
          <p className="ml-2 ext-white flex space-x-4">
            Get started with Saverse thrift administrator
          </p>
        </div>
        
        <div className="col-end-7 col-span-1 rounded-l-lg bg-gradient-to-r from-black to-gray-200 mx-2 my-2">
          
          </div>
          </div>
        
        <Footer />
    </>
  )
}
