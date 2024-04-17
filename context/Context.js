"use client"
import React from 'react'
import { createContext } from 'react'
export const MyContext = createContext()

const Context = ({children}) => {
    const Programmer = "Vikram Kautlya"
  return (
    <div>
          <MyContext.Provider value={Programmer}>
              {children}
          </MyContext.Provider>
    </div>
  )
}

export default Context
