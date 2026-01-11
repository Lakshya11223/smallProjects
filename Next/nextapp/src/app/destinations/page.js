'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

// Move static data outside to optimize performance
const LOKS = ["Shivalok", "VishnuLok", "SwargLok", "MrituLok"];

export default function LoksPage() {
   const router =  useRouter()
  return (
    <main className="min-h-screen pt-32 px-6 ">
      <div className="max-w-md mx-auto flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-center mb-4">Divine Realms</h1>
        
        {LOKS.map((lok) => (
          <div 
            key={lok} 
            className="p-6 font-semibold text-lg text-gray-800 bg-white 
                       border border-gray-200 rounded-2xl shadow-sm
                       hover:opacity-80 transition-all 
                       cursor-pointer text-center"
            onClick={()=>router.push(`/destinations/${lok}`)}
          >
            {lok}
          </div>
        ))}
      </div>
    </main>
  )
}