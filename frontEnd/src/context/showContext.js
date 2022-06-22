import React, { useContext, useState } from 'react'

export const ShowContext = React.createContext({
  show: undefined,
  setShow: async (_show) => null,
})

export const useShow = () => useContext(ShowContext)

export const ShowProvider = ({ children }) => {
  const [show, setShow] = useState(false)

  return <ShowContext.Provider value={{ show, setShow }}>{children}</ShowContext.Provider>
}
