import React from 'react'

type Props = {}

function CSSPractice({}: Props) {
  return (
    <div className='h-screen bg-purple-800'>
        <p>CSS Practice</p>
        <div className='bg-blue-500'>
            <p>Box 1</p>
            <div className='bg-orange-700'>
                <p>Box 2</p>
                <div className='bg-green-800'>
                    <p>Box 3</p>
                    <div>
                        <p>Box 4</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CSSPractice