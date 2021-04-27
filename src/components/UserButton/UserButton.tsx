import React, {useRef, useState} from 'react'
import {Button, Portal} from 'components'
import {BsPeopleCircle, AiFillCaretDown} from 'react-icons/all'
import {useStores} from 'utils/stores'
import {observer} from 'mobx-react'
import {useOutsideAlerter} from 'utils/helpers'
import {useTranslation} from 'react-i18next'

export const UserButton = observer(() => {
  const {t} = useTranslation()

  const {UserStore} = useStores()
  const {logout, userName} = UserStore
  const ref = useRef(null)
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setTimeout(() => setOpen(!open), 100)
  }

  useOutsideAlerter(ref, toggleOpen, open)

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
              <div>{userName}</div>
            </div>

            <div className="item">
              <Button>{t("Settings")}</Button>
            </div>
            <div className="item">
              <Button onClick={logout}>{t("Logout")}</Button>
            </div>
          </div>
        </Portal>
      )}
    </>
  )
})
