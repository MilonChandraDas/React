import React from 'react'
import { useParams } from 'react-router-dom'

const UserId = () => {
    const { userId } = useParams()
  return (
      <div className='text-center bg-gray-700 text-white py-5'>UserId : {userId }</div>
  )
}

export default UserId