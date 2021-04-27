import React, {useRef, useState} from 'react'
import {Button, Portal} from 'components'
import {BsPeopleCircle, AiFillCaretDown} from 'react-icons/all'

export const UserButton = () => {
  const ref = useRef(null)
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <Button ref={ref} onClick={toggleOpen} className="light">
        <BsPeopleCircle className="mr-10" />
        <AiFillCaretDown />
      </Button>

      {open && (
        <Portal offset="br" hocRef={ref} customWidth={180}>
          <div className="options-popup">
            <div className="item">
              <div>UserName123</div>
            </div>

            <div className="item">
              <Button>Settings</Button>
            </div>
            <div className="item">
              <Button>Logout</Button>
            </div>
          </div>
        </Portal>
      )}
    </>
  )
}
