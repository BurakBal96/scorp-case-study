import React, {useState} from 'react'
import {Modal, Button, Form, Input, Submit} from 'components'
import {useStores} from 'utils/stores'
import * as Yup from 'yup'
import {observer} from 'mobx-react'
import {useTranslation} from 'react-i18next'

export const LoginModal = observer(() => {
  const {t} = useTranslation()

  const schema = Yup.object().shape({
    name: Yup.string().required(t('Required')),
    email: Yup.string()
      .required(t('Required'))
      .email(t('Must be a valid email')),
    password: Yup.string()
      .required(t('Required'))
      .matches(/[A-Z]+/, t('Must include at least one uppercase character'))
      .matches(/[a-z]+/, t('Must include at least one lowercase character'))
      .matches(/[0-9]+/, t('Must contain a number'))
      .min(8, t('Too short - should be 8 chars minimum')),
  })

  const {UserStore} = useStores()
  const [open, setOpen] = useState(false)

  const toggleModal = () => setOpen(!open)

  const handleLogin = (data: any) => {
    UserStore.login({data})
  }

  return (
    <>
      <Button onClick={toggleModal}>{t('Login')}</Button>
      {open && (
        <Modal title={t('Login')} onClose={toggleModal}>
          <Form schema={schema} onSubmit={handleLogin}>
            <Input name="name" label={t('Name')} />
            <Input
              name="email"
              label={t('Email')}
              placeholder="example@mail.com"
            />
            <Input name="password" label={t('Password')} type="password" />
            <Submit className="mt-10">{t('Login')}</Submit>
          </Form>
        </Modal>
      )}
    </>
  )
})
