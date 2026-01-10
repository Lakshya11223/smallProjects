import React from 'react'

function Nav() {
  return (
    <div className='flex justify-between items-center h-10  bg-gray-400  '
    >
        <div> Tourist Guide</div>
        <div 
        >
            <ul className='flex gap-10'>
                <li>Home</li>
                <li>Destination</li>
                <li>Contact-Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav