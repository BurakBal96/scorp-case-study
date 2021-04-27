import React, {FC, InputHTMLAttributes, useEffect} from 'react'
import {useFormContext} from 'react-hook-form'
import {Label, Error} from 'components'
import {getFormOptions} from 'utils/helpers'

//todo auto focus

interface Props {
  className?: string
  containerClassName?: string
  icon?: null | FC
  iconLocation?: string
  label?: string
  name: string
  onlyNumbers?: boolean
  onChange?: Function
}

export const Input = ({
  className = '',
  containerClassName = '',
  icon = null,
  iconLocation = 'right',
  label = '',
  name = '',
  onlyNumbers = false,
  onChange: propsOnChange,
  ...props
}: Props & InputHTMLAttributes<HTMLInputElement>) => {
  const {
    register,
    formState: {errors = {}, isSubmitted},
    setValue,
  } = useFormContext()

  useEffect(() => {
    if (register && name) register(name)
  }, [register, name])

  const handleChange = (e: any) => {
    const value = e?.target?.value
    if (name) setValue(name, value, getFormOptions(isSubmitted))
    if (propsOnChange) propsOnChange(value)
  }

  return (
    <div className={'input-container ' + containerClassName}>
      <label>
        <Label label={label} />
        <div className={`input-base horizon middle ${className}`}>
          {icon && iconLocation === 'left' && (
            <span className="input-icon left">{icon}</span>
          )}

          <input
            onChange={handleChange}
            onKeyDown={onlyNumbers ? acceptOnlyNumbers : undefined}
            className="input per-100"
            {...props}
          />

          {icon && iconLocation === 'right' && (
            <span className="input-icon right">{icon}</span>
          )}
        </div>
        <Error name={name} errors={errors} />
      </label>
    </div>
  )
}

const acceptOnlyNumbers = (e: any) => {
  if (
    !(
      (e.keyCode > 95 && e.keyCode < 106) ||
      (e.keyCode > 47 && e.keyCode < 58) ||
      e.keyCode === 8
    )
  )
    e.preventDefault()
}
