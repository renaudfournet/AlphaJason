import React from 'react'
import './App.css'
import ApiContextProvider from './components/ApiContextProvider'
import Header from './components/Header'
import TableRanking from './components/TableRanking'

function App() {
  return (
    <ApiContextProvider>
      <div className="App">
        <Header />
        <TableRanking />
      </div>
    </ApiContextProvider>
  )
}

export default App
