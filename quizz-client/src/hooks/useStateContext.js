import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

// Tao Context
export const UserContext = createContext();

// Tao Context khoi tao ban dau
const getFreshContext = ()=>{
    return {
        participantID: 0,
        timeTaken:0,
        selectedOptions:[]
    }
}

//Tao context provider bao boc ung dung
export function ContextProvider({children}) {
const [context, setContext] = useState(getFreshContext())

  return (
    <stateContext.Provider value={{context, setContext}}>
        {children}  
    </stateContext.Provider>
  )
}
