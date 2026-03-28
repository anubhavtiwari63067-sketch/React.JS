import React from 'react'
import './App.css'
import Card from './components/Card'

function App(btnText, channel) {
  console.log("btnText", btnText)
  console.log("channel", channel)
  return (
    <>
      {/* Opening fragment */}

      <Card channel = "TechNexus" btnText="click me" />

      {/* Closing fragment */}
    </>
  )
}

export default App