import React from 'react'

function loklayout({children,info}) {
  return (
    <div className='flex justify-between p-10'> 
        {children}
        {info}
    </div>
  )
}

export default loklayout