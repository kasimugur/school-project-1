import { Facebook, Instagram, Twitter, X } from '@mui/icons-material'
import {  IconButton } from '@mui/material'
import Link from 'next/link'

export default function Footer() {

  return (
    <div className='mb-2 text-center text-sm'>
      <div className="space-x-2">
        <IconButton  href={`https://www.instagram.com`}  target='_blank' color='error' >
        <Instagram />
        </IconButton>
        <IconButton href={`https://x.com`}  color='inherit' target='_blank' >
        <X />
        </IconButton>
        <IconButton color='info' href={`https://www.facebook.com`}  target='_blank' >
        <Facebook />
        </IconButton>
      </div>
      <div className="">
        <Link href={`https://github.com/kasimugur/`} target='_blank'> Copyright @kasimugur takipte kal</Link>
      </div>
    </div>
  )
}
