import {useState} from 'react'

export const withToggle = Clicable => ({ ...props }) => {

  const [show, setShow] = useState()

  return <Clicable {...props} show={show} setShow={setShow} />

}
