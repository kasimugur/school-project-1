"use client"
import { Button } from '@mui/material';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Header() {
  const pathName = usePathname();
  return (
    <div className=' bg-zinc-400  space-x-12 flex  justify-center px-2 '>

      <div className="transition duration-500 container flex mx-10 justify-center items-center">
        <Button className='w-56' color='inherit'  >
          <Link className={`w-full p-1 ${pathName === "/" ? "activeHeader" : ""}`} href="/" color="inherit">Ana sayfa</Link>
        </Button>
        <Button className='w-56' color='inherit'>
          <Link className={`w-full p-1 ${pathName === "/gallery" ? "activeHeader" : ""}`} href="gallery" color="inherit">Gallery</Link>
        </Button>
        <Button className='w-56' color='inherit' >
          <Link className={`w-full p-1 ${pathName === "/contact" ? "activeHeader" : ""}`} href="/contact" color="inherit">İletişim</Link>
        </Button>
        <Button className='w-56' color='inherit'>
          <Link className={`w-full p-1 ${pathName === "/about" ? "activeHeader" : ""}`} href="/about" color="inherit">Hakkımızda</Link>
        </Button>

      </div>
    </div>
  )
}
