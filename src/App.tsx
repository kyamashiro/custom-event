import React from 'react'
import './App.css'
import { MyObject, useCustomEvent } from './hooks/useCustomEvent'

function App () {
  const { id } = useCustomEvent()

  const onClick = () => {
    const obj: MyObject = { id: id + 1 }
    document.dispatchEvent(new CustomEvent('custom-event', { detail: obj }))
  }

  return (
      <div className="App">
        <p>{id}</p>
        <button onClick={onClick}>Event Dispatch</button>
      </div>
  )
}

export default App
