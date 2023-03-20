import React from 'react'

type Props = {}

function CSSPractice({}: Props) {
  return (
    <div className='h-screen bg-purple-800'>
        <p>CSS Practice</p>
        <div>
            <p>Box 1</p>
            <div>
                <p>Box 2</p>
                <div>
                    <p>Box 3</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CSSPractice