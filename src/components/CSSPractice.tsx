import React from 'react'

type Props = {}

function CSSPractice({}: Props) {
  return (
    <div className='relative h-screen pt-20 bg-purple-500 flex justify-center items-center flex-col'>
        <p>CSS Practice</p>
        <div className='relative bg-red-900 h-80 w-80 flex justify-center items-center'>
            <p className='text-white '>Box 1</p>
            <div className='bg-blue-500 h-70 w-70 flex justify-center items-center'>
                <p className='text-white'>Box 2</p>
            </div>
        </div>
    </div>
  )
}

export default CSSPractice