import React, { createContext, useState } from 'react'

export const XsSearchContext = createContext()

const XsSearchProvider = ({children}) => {

  const [xsSearch, setXsSearch] = useState(false)

  let value = {
    xsSearch: xsSearch, 
    setXsSearch: setXsSearch
  }
  
  return (
      <XsSearchContext.Provider value={value}>
          {children}
      </XsSearchContext.Provider>
  )
}

export default XsSearchProvider