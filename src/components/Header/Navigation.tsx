import React from 'react'
import {Button, Form, Select, UserButton} from 'components'

export const Navigation = () => {
  // const handleNavigate = () => null

  const handleLanguageChange = ({language}: {language: any}) => {
    console.log(language)
  }

  return (
    <div className="navigation">
      <Button className="primary-btn light">Login</Button>
      <Form onSubmit={handleLanguageChange}>
        <Select
          name="language"
          placeholder="Language"
          disableClear
          options={[
            {label: 'Turkish', value: 'tr-tr'},
            {label: 'English', value: 'en-us'},
          ]}
        />
      </Form>
      <UserButton />
    </div>
  )
}
