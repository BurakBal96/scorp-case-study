import React, {useEffect} from 'react'
import {observer} from 'mobx-react'
import {useStores} from 'utils/stores'
import {Form, Input, Select, Submit} from 'components'
import {phoneRegExp} from 'utils/helpers'
import * as Yup from 'yup'
import {useTranslation} from 'react-i18next'

export const ContactUs = observer(() => {
  const {t} = useTranslation()
  const {UIStore, UserStore} = useStores()

  useEffect(() => {
    UIStore.setCurrentPage(t('Contact Us'))
  }, [UIStore, t])

  const countryList = [
    {value: 'TR', label: t('Turkey')},
    {value: 'US', label: t('United States of America')},
    {value: 'GB', label: t('United Kingdom')},
    {value: 'DE', label: t('Germany')},
    {value: 'SE', label: t('Sweden')},
    {value: 'KE', label: t('Kenya')},
    {value: 'BR', label: t('Brazil')},
    {value: 'ZW', label: t('Zimbabwe')},
  ]

  const schema = Yup.object().shape({
    name: Yup.string().required(t('Required')),
    email: Yup.string()
      .required(t('Required'))
      .email(t('Must be a valid email')),
    phonenumber: Yup.string()
      .required(t('Required'))
      .matches(phoneRegExp, t('Phone number is not valid')),
    country_code: Yup.string().required(t('Required')),
    text: Yup.string().required(t('Required')),
  })

  const {userName, email} = UserStore

  const doNothing = (data: any) => console.log(data)

  return (
    <div className="per-100 vertical center mt-30 mb-30">
      <div className="per-30 vertical">
        <h3>{t('Hello {{userName}},', {userName: userName || ''})}</h3>

        <Form
          className="contact-us-form"
          schema={schema}
          onSubmit={doNothing}
          defaultValues={{
            name: userName,
            email: email,
          }}>
          <Input name="name" label={t('Name')} />
          <Input
            name="email"
            label={t('Email')}
            placeholder="example@mail.com"
          />
          <Input
            name="phonenumber"
            label={t('Phone Number')}
            placeholder="+90 555 5555"
          />
          <Select
            name="country_code"
            label={t('Country')}
            options={countryList}
          />
          <Input name="text" label={t('Your Message')} rows={4} />
          <Submit className="mt-10">{t('Send')}</Submit>
        </Form>
      </div>
    </div>
  )
})
