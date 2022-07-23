import { useEffect, useState } from 'react'

export interface MyObject {
  id: number
}

export const useCustomEvent = () => {
  const [id, setId] = useState(0)

  useEffect(() => {
    const handleEvent = ((event: CustomEvent<MyObject>) => {
      setId(event.detail.id)
    }) as EventListenerOrEventListenerObject

    document.addEventListener('custom-event', handleEvent)

    return () => {
      document.removeEventListener('custom-event', handleEvent)
    }
  })

  return { id }
}
