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
        <div class="bg-gradient-to-r from-slate-500 to-gray-200 h-screen">
          <p>
            Get started with 
            <code className={styles.code}> Saverse thrift administrator</code>
          </p>
        </div>
        <Footer />
    </>
  )
}
