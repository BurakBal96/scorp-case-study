import React from 'react'
import {useFormContext} from 'react-hook-form'
import {Button} from 'components'
import {FormInterface} from '../../utils/helpers'

interface Props {
  className?: string
  children: React.ReactNode
  preventEnter?: boolean
  [key: string]: any
}

export const Submit = ({
  className,
  children,
  preventEnter = false,
  ...rest
}: Props) => {
  const {onSubmit = () => null}: FormInterface = useFormContext()

  const handleSubmit = async () => await onSubmit()

  return (
    <Button
      {...rest}
      className={className}
      type="submit"
      onClick={!preventEnter ? handleSubmit : () => {}}>
      {children}
    </Button>
  )
}
