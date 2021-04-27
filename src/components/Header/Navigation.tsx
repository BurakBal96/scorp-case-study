import React from 'react'
import {Button, UserButton, LoginModal} from 'components'


export const Navigation = () => {
  // const handleNavigate = () => null

  const handleLanguage = (language: any) => (event: any) => {
    console.log(language)
  }

  return (
    <div className="navigation">
      <LoginModal />
      <div className="horizon">
        <Button className="basic-btn mr-4" onClick={handleLanguage('tr-tr')}>
          TR
        </Button>
        <hr />
        <Button className="basic-btn ml-4" onClick={handleLanguage('en-us')}>
          EN
        </Button>
      </div>
      <UserButton />
    </div>
  )
}
