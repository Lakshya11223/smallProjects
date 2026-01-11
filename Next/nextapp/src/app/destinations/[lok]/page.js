// [] this is dynamic route
'use client'
import { useParams } from 'next/navigation'
import React from 'react'

function page(params) {
    const {lok} = useParams()
    const destinationData = {
        "Shivalok": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoZxCJzON8XE8N4Tm9zhh20eaNGD6LcHcWQ&s",
        "VishnuLok": "https://img.freepik.com/premium-photo/lord-vishnu-blue-colour-humanoid-beautiful-eyes-generative-ai_849906-12597.jpg?w=360",
        "SwargLok": "https://t3.ftcdn.net/jpg/15/05/01/00/360_F_1505010010_jG3BvQNfNpBuCuSzrrfJdwQhEdPzHLCg.jpg",
        "MrituLok": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6iGQUYhfdZ0vRw8cu_OnogXvV2w0jP3sPCQ&s",
    };
    const imageurl = destinationData[lok]
  return (
    <div className='pt-10'>
        {lok} is very beautiful.
        <div className='h-140 w-100 '>
                    <img 
                        src={imageurl} 
                        alt={lok} 
                        className='w-full h-full object-cover' 
                    />
        </div>
    </div>
  )
}

export default page