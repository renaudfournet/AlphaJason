import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'

import token from '../credentials'
const ApiContext = createContext()

export default function ApiContextProvider({ children }) {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://lichess.org/api/account', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      setData(result.data)
    }
    fetchData()
  }, [])

  return (
    <>
      <ApiContext.Provider value={{ data }}>{children}</ApiContext.Provider>
    </>
  )
}

export function useApi() {
  const context = useContext(ApiContext)
  if (context === undefined) {
    throw new Error('Context must be used within a Provider')
  }
  return context
}
