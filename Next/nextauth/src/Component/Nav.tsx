"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Nav() {
   const pathname = usePathname()
  return (
    <div className='flex justify-between items-center h-10  bg-gray-500 w-full fixed'
    >
        <div className='pl-5 font-bold'>NextAuth</div>
        <div 
        >
            <ul className='flex gap-10 m-1'>
                <li><Link href="/" className={pathname === "/" ? "text-red-500" : ""}> Home</Link></li>
                 <li><Link href={"/login"} className={pathname=="/login" ? "text-red-500" : ""}>Sign In</Link></li>
                 <li><Link href={"/register"} className={pathname=="/register" ? "text-red-500" : ""}>Register</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Nav