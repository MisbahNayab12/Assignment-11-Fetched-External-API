import React from 'react'
import Link from 'next/link'
import { Button } from "../../components/ui/button"
import Image from 'next/image'
import image from "../../public/api image.webp"

export default function Header() {
  return (
    <main className='h-screen w-screen'>
      <div className=' bg-cover bg-no-repeat ' style={{ backgroundImage: "url('/academic.jpg')" }}>
        <nav className='mt-1 flex justify-between items-center'>
          <p className='text-indigo-900 font-bold text-2xl mt-5 mr-auto ml-40 '>Misbah</p>
          <ul className='flex gap-9 list-none text-white mr-16 mt-5 items-center'>
            <li>
              <Link href="/" className=' hover:text-indigo-900'>HOME</Link>
            </li>
            <li>
              <Link href="/games" className=' hover:text-indigo-900'> ABOUT </Link>
            </li>
            <li>
              <Link href="/lessons" className=' hover:text-indigo-900'> CONTACT </Link>
            </li>
            <li>
              <Link href="/contact" className=' hover:text-indigo-900'> NEWS </Link>
            </li>

            <li><Button type="submit" className="hover:bg-indigo-900 bg-indigo-900 font-semibold">SIGN UP</Button></li>

          </ul>
        </nav>
        <div className='flex justify-center items-center gap-60 mt-10'>
          <h1 className='font-bold text-7xl mt-16 leading-normal saira text-indigo-900'> Fetched API </h1>
          <Image src={image} alt="Logo" className='w-96 h-96 object-cover rounded-full mt-5' />
        </div>
      </div>
    </main>
  )
}


