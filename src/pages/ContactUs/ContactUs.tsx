import React, {useEffect} from 'react'
import {observer} from 'mobx-react'
import {useStores} from 'utils/stores'
import {Form, Input, Select, Submit} from 'components'
import {phoneRegExp} from 'utils/helpers'
import * as Yup from 'yup'

const countryList = [
  {value: 'TR', label: 'Turkey'},
  {value: 'US', label: 'United States of America'},
  {value: 'GB', label: 'United Kingdom'},
  {value: 'DE', label: 'Germany'},
  {value: 'SE', label: 'Sweden'},
  {value: 'KE', label: 'Kenya'},
  {value: 'BR', label: 'Brazil'},
  {value: 'ZW', label: 'Zimbabwe'},
]

export const ContactUs = observer(() => {
  const {UIStore, UserStore} =useStores()

  useEffect(()=>{
    UIStore.setCurrentPage("Contact Us")
  }, [UIStore])

  const schema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().required('Required').email('Must be a valid email'),
    phonenumber: Yup.string()
      .required('Required')
      .matches(phoneRegExp, 'Phone number is not valid'),
    country_code: Yup.string().required('Required'),
    text: Yup.string().required('Required'),
  })

  const {userName, email} = UserStore

  const doNothing = (data: any) => console.log(data)

  return (
    <div className="per-100 vertical center mt-30 mb-30">
      <div className="per-30 vertical">
        <h3>Hello {userName || ''},</h3>

        <Form
          className="contact-us-form"
          schema={schema}
          onSubmit={doNothing}
          defaultValues={{
            name: userName,
            email: email,
          }}>
          <Input name="name" label="Name" />
          <Input name="email" label="Email" placeholder="example@mail.com" />
          <Input
            name="phonenumber"
            label="Phone Number"
            placeholder="+90 555 5555"
          />
          <Select name="country_code" label="Country" options={countryList} />
          <Input name="text" label="Your Message" rows={4} />
          <Submit className="mt-10">Send</Submit>
        </Form>
      </div>
    </div>
  )
})
