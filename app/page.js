"use client"

import Header from '@/Components/Header'
import { MyContext } from '@/context/Context'

import React, { useState } from 'react'
import { useContext } from 'react'

const page = () => {
  Header
    const User = useContext(MyContext)
    // console.log(User)
    return (
      
    <div>
          <h1>This is the Main page</h1>
        <Header/>
    </div>
  )
}

export default page
