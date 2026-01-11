
"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Nav() {
   const pathname = usePathname()
  return (
    <div className='flex justify-between items-center h-10  bg-gray-500 w-full fixed'
    >
        <div className='pl-5 font-bold'> Tourist Guide</div>
        <div 
        >
            <ul className='flex gap-10 m-1'>
                <li><Link href="/" className={pathname === "/" ? "text-red-500" : ""}> Home</Link></li>
                 <li><Link href={"/destinations"} className={pathname=="/destinations" ? "text-red-500" : ""}>Destination</Link></li>
                 <li><Link href={"/contact"} className={pathname=="/contact" ? "text-red-500" : ""}>Contact-Us</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Nav