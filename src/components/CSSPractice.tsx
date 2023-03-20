import React from 'react'

type Props = {}

function CSSPractice({}: Props) {
  return (
    <div className=' h-screen pt-20 bg-purple-500 flex justify-center items-center flex-col'>
        <p>CSS Practice</p>
        <div className='absolute bg-red-900 h-80 w-80 flex justify-center items-center top-48'>
            <p className='text-white absolute left-0 top-0'>Box 1</p>
            <div className='bg-blue-500  flex justify-center items-center'>
                <p className='text-white'>Box 2</p>
            </div>
        </div>
    </div>
  )
}

export default CSSPractice