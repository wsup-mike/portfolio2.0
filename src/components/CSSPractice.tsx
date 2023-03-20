import React from 'react'

type Props = {}

function CSSPractice({}: Props) {
  return (
    <div className='h-screen bg-purple-800 flex justify-center items-center flex-col'>
        <p>CSS Practice</p>
        <div className='bg-blue-500 h-[400px] w-[400px]'>
            <p>Box 1</p>
            <div className='bg-orange-700 h-[350px] w-[350px]'>
                <p>Box 2</p>
                <div className='bg-green-800'>
                    <p>Box 3</p>
                    <div className='bg-red-800'>
                        <p>Box 4</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CSSPractice