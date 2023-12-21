"use client"
import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthProviders from './AuthProviders'

const Navbar = () => {

    const session={}
  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href="/">
            <Image src="/logo.svg" alt='flexibble' width={115} height={43}/>
        </Link>
        <ul className='hidden xl:flex text-small gap-7'>
            {
                NavLinks.map((link)=>(
                    <Link href={link.href} key={link.key}>{link.text}</Link>
                )    
                )
            }
        </ul>
      </div>
      <div className='flexCenter gap-4'>
           {
            session? (
                <>
                User photo
                <Link href="/create-project">
                    share work
                </Link>
                </>
            ):(
                <AuthProviders/>
            )
            
           }
      </div>
    </nav>
  )
}

export default Navbar