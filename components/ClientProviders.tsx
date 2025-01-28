'use client'

import { Provider } from 'react-redux'
import store from '../store/index'
import { useEffect, useState } from 'react'

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode
}) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return <Provider store={store}>{children}</Provider>
}