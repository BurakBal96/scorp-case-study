import React from 'react'
import {Button, UserButton, LoginModal} from 'components'
import {useStores} from 'utils/stores'
import {observer} from 'mobx-react'

export const Navigation = observer(() => {
  const {UserStore} = useStores()
  const {token} = UserStore

  const handleLanguage = (language: any) => (event: any) => {
    console.log(language)
  }

  return (
    <div className="navigation">
      {!token && <LoginModal />}
      <div className="horizon">
        <Button className="basic-btn mr-4" onClick={handleLanguage('tr-tr')}>
          TR
        </Button>
        <hr />
        <Button className="basic-btn ml-4" onClick={handleLanguage('en-us')}>
          EN
        </Button>
      </div>
      {token && <UserButton />}
    </div>
  )
})
