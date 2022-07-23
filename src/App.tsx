import React, { useEffect, useState } from 'react'
import './App.css'

interface MyObject {
  id: number
}

function App () {
  const [id, setId] = useState(0)

  useEffect(() => {
    const handleEvent = ((event: CustomEvent<MyObject>) => {
      console.log(event)
      setId(event.detail.id)
    }) as EventListenerOrEventListenerObject

    document.addEventListener('custom-event', handleEvent)

    return () => {
      document.removeEventListener('custom-event', handleEvent)
    }
  })

  const onClick = () => {
    console.log('onClick')
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
