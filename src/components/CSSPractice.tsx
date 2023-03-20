import React from 'react'

type Props = {}

function CSSPractice({}: Props) {
  return (
    <div className=' h-screen bg-purple-800 flex justify-center items-center flex-col'>
        <p>CSS Practice</p>
        <div className=' bg-blue-500 h-[400px] w-[400px] flex justify-center items-center flex-col'>
            <p className='text-xs'>Box 1</p>
            <div className=' bg-orange-700 h-[350px] w-[350px] flex justify-center items-center'>
                <p className='text-xs'>Box 2</p>
                <div className=' bg-green-800 h-[300px] w-[300px] flex justify-center items-center'>
                    <p className='text-xs'>Box 3</p>
                    <div className=' bg-red-800 h-[250px] w-[250px] flex justify-center items-center'>
                        <p className='text-xs'>Box 4</p>
                        <div className=' bg-yellow-600 h-[100px] w-[200px]'>
                            <p className='text-xs'>Box 5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CSSPractice