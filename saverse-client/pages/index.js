import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Footer from '../components/Footer';
import Buttons from '../components/Buttons';
import Navbar from '../components/Navbar';
import { Inter } from 'next/font/google'
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
      <div className="h-full">
        <Navbar />
      </div>
      <div className="grid grid-cols-6 gap-1 bg-gradient-to-r from-slate-500 to-gray-200">
        <div className="col-start-1 col-end-6 rounded-r-lg bg-gradient-to-r from-white to-gray-200 mx-2 my-2">

          <p className="mx-3 text-justify">
            Get started with Saverse thrift administrator
          </p>
        </div>

        <div className="col-end-7 col-span-1 rounded-l-lg bg-gradient-to-r py-5 from-gray-900 to-gray-200 mx-2 my-2">

          <Buttons text="No. 1" link="#" />
          <Buttons text="No. 2" link="#" />
          <Buttons text="No. 3" link="#" />
          <Buttons text="No. 4" link="#" />
          <Buttons text="No. 5" link="#" />
          <Buttons text="No. 6" link="#" />
          <Buttons text="No. 7" link="#" />
          <Buttons text="No. 8" link="#" />
          <Buttons text="No. 9" link="#" />
          <Buttons text="No. 10" link="#" />

        </div>
      </div>
      <Footer />
    </>
  )
}
