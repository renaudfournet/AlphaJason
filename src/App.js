import React from 'react'
import './App.css'
import ApiContextProvider from './components/ApiContextProvider'
import Routes from './components/navigation/Routes'

function App() {
  return (
    <>
      <ApiContextProvider>
        <Routes />
      </ApiContextProvider>
    </>
  )
}

export default App
