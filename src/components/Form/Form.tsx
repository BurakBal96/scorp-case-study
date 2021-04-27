import React, {useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import useDeepCompareEffect from 'use-deep-compare-effect'

interface Props {
  className?: string
  defaultValues?: Object
  children: React.ReactNode
  schema?: Yup.ObjectSchema<any>
  onSubmit: Function
  onChange?: Function
  submitOnChange?: boolean
  preventEnter?: boolean
}

export const Form = ({
  className,
  defaultValues = {},
  children,
  schema = Yup.object().shape({}),
  onSubmit = () => null,
  onChange,
  submitOnChange,
  preventEnter = false,
}: Props) => {
  const [initialized, setInitialized] = useState(false)
  const {handleSubmit, ...methods} = useForm({
    resolver: yupResolver(schema),
    defaultValues,
    reValidateMode: 'onChange',
  })
  const watch = {...methods.watch()}
  if (onChange) onChange(watch)

  useDeepCompareEffect(() => {
    if (!initialized) {
      setInitialized(true)
    } else if (defaultValues) {
      setInitialized(true)
      methods.reset(defaultValues)
    }
  }, [defaultValues])

  const handleFormChange = () => {
    if (submitOnChange) {
      // @ts-ignore
      handleSubmit(onSubmit)()
    }
  }

  return (
    <FormProvider
      {...methods}
      // @ts-ignore
      submitOnChange={submitOnChange}
      defaultValues={defaultValues}
      // @ts-ignore
      onSubmit={handleSubmit(onSubmit)}>
      <form
        onKeyPress={e =>
          preventEnter && e.key === 'Enter' && e.preventDefault()
        }
        className={className}
        // @ts-ignore
        onSubmit={handleSubmit(onSubmit)}
        onChange={handleFormChange}>
        {children}
      </form>
    </FormProvider>
  )
}
