import React from 'react'

type Props = {}

function CSSPractice({}: Props) {
  return (
    <div className='relative h-screen bg-purple-800 flex justify-center items-center flex-col'>
        <p className='z-10'>CSS Practice</p>
        <div className='absolute bg-blue-500 h-[400px] w-[400px] flex justify-center items-center'>
            <p>Box 1</p>
            <div className='absolute bg-orange-700 h-[350px] w-[350px] flex justify-center items-center'>
                <p>Box 2</p>
                <div className='absolute bg-green-800 h-[300px] w-[300px] flex justify-center items-center'>
                    <p>Box 3</p>
                    <div className='absolute bg-red-800 h-[250px] w-[250px]'>
                        <p>Box 4</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CSSPractice