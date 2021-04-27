import React, {useState} from 'react'
import {Modal, Button, Form, Input, Submit} from 'components'
import {useStores} from 'utils/stores'
import * as Yup from 'yup'
import {observer} from 'mobx-react'

export const LoginModal = observer(() => {
  const schema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().required('Required').email('Must be a valid email'),
    password: Yup.string()
      .required('Required')
      .matches(/[A-Z]+/, 'Must include at least one uppercase character')
      .matches(/[a-z]+/, 'Must include at least one lowercase character')
      .matches(/[0-9]+/, 'Must contain a number')
      .min(8, 'Too short - should be 8 chars minimum'),
  })

  const {UserStore} = useStores()
  const [open, setOpen] = useState(false)

  const toggleModal = () => setOpen(!open)

  const handleLogin = (data: any) => {
    UserStore.login({data})
  }

  return (
    <>
      <Button onClick={toggleModal}>Login</Button>
      {open && (
        <Modal title="Login" onClose={toggleModal}>
          <Form schema={schema} onSubmit={handleLogin}>
            <Input name="name" label="Name" />
            <Input name="email" label="Email" placeholder="example@mail.com" />
            <Input name="password" label="password" type="password" />
            <Submit className="mt-10">Login</Submit>
          </Form>
        </Modal>
      )}
    </>
  )
})
