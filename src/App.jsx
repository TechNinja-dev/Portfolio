import React from 'react'
import Home from './Home'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Home />
      <Analytics />
    </>
  )
}

export default App
