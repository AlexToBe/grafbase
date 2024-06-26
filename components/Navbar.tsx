import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { NavLinks } from '@/constants'
import Authproviders from './Authproviders'


const Navbar = () => {
    const session = null
  return (
    <nav className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>
              <Link href='/' >
                  <Image 
                      src='/logo.svg'
                      alt='logo'
                      width={115}
                      height={43}
                  />
              </Link>
              <ul className='xl:flex hidden text-small gap-7'>
                  {NavLinks.map((link) => (
                    <Link key={link.key} href={link.href}>{link.text}</Link>
                  ))}
              </ul>
        </div>
          <div className='flexCenter gap-4'>
              {session ? (
                  <>
                  UserPhoto
                  <Link href={ '/create-project'}>
                      Share work
                  </Link>
                </>
              ) : (
                    <Authproviders/>
            )}
              
        </div>
    </nav>
  )
}

export default Navbar
