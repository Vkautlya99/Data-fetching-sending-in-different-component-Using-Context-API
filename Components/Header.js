import { MyContext } from '@/context/Context'
import React from 'react'
import { useContext } from 'react'

const Header = () => {

    const user = useContext(MyContext)
  return (
    <div className='bg-green-300 p-6'>
      {user}
    </div>
  )
}

export default Header
