"use client"
import Header from '@/Components/Header'
import React, { useState } from 'react'

const page = () => {

  const [num, setnum] = useState("Vikram is a good programmer");

    return (
      
    <div>
          
        <Header num={num} />
        </div>
  )
}

export default page
