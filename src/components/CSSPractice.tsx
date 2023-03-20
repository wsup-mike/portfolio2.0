import React from 'react'

type Props = {}

function CSSPractice({}: Props) {
  return (
    <div className='h-screen pt-20 bg-purple-500'>
        <p>CSS Practice</p>
        <div className='bg-red-900 h-80 w-80'>
            <p className='text-white'>Box 1</p>
        </div>
    </div>
  )
}

export default CSSPractice