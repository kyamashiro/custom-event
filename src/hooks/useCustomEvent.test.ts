import { renderHook } from '@testing-library/react-hooks'
import { useCustomEvent } from './useCustomEvent'
import { act } from '@testing-library/react'

describe('custom-event', () => {
  test('event listener', () => {
    const { result } = renderHook(() => useCustomEvent())

    act(() => {
      document.dispatchEvent(new CustomEvent('custom-event', { detail: { id: 1 } }))
    })

    expect(result.current.id).toBe(1)
  })
})
