import React from 'react'
import useStateContext from '../hooks/useStateContext'

export default function Quiz() {

    const {context,setContext} = useStateContext()

    // setContext ({
    //     ...context,
    //     timeTaken:1
    // })
    console.log()
  return (
    <div>Quiz</div>
  )
}
