import React, { memo } from 'react'
import loading from './loading.gif'

const Buffering = memo(() => {
  return (
    <div className='text-center'>
        <img src={loading} alt="loading" />
    </div>
  )
})

export default Buffering