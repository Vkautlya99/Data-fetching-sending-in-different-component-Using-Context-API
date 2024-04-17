import React from 'react'
import Nav from './Nav'

const Header = (props) => {
    
  
  return (
    <div className='bg-green-300 p-5'>
      This is Header Component
          <Nav num={props.num } />
      </div>
  )
}

export default Header
