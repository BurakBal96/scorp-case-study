import React from 'react'
import {Button, UserButton, LoginModal} from 'components'
import {useStores} from 'utils/stores'
import {observer} from 'mobx-react'
import {useTranslation} from 'react-i18next'

export const Navigation = observer(() => {
  const { i18n } = useTranslation()

  const {UserStore} = useStores()
  const {token} = UserStore

  const handleLanguage = (language: any) => (event: any) => {
    i18n.changeLanguage(language).then()
    console.log("language changed =>", language)
  }

  return (
    <div className="navigation">

      <div className="horizon">
        <Button className="basic-btn mr-4" onClick={handleLanguage('tr')}>
          TR
        </Button>
        <hr />
        <Button className="basic-btn ml-4" onClick={handleLanguage('en')}>
          EN
        </Button>
      </div>
      {token ? <UserButton /> : <LoginModal />}
    </div>
  )
})
