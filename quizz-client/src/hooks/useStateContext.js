import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

// Tao Context
export const stateContext = createContext();

// Tao Context khoi tao ban dau
const getFreshContext = ()=>{
    if(localStorage.getItem('context')===null){
        localStorage.setItem('context',JSON.stringify({
            pid: 0,
            timeTaken:0,
            selectedOptions:[]
        }))
    }
    return JSON.parse(localStorage.getItem('context'))
}

export default function useStateContext(){
    const {context, setContext} = useContext(stateContext)
    return { 
        context,
        setContext : obj => {setContext({...context, ...obj})}
    }
}

//Tao context provider bao boc ung dung
export function ContextProvider({children}) {
const [context, setContext] = useState(getFreshContext())

useEffect(()=>{
    localStorage.setItem('context', JSON.stringify(context))
}, [context])

  return (
    <stateContext.Provider value={{context, setContext}}>
        {children}  
    </stateContext.Provider>
  )
}
