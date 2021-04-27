import React, {FC, InputHTMLAttributes} from 'react'
import {useFormContext} from 'react-hook-form'
import {Label, Error} from 'components'

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
  rows?: number
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
  rows = 1,
  ...props
}: Props & InputHTMLAttributes<HTMLInputElement>) => {
  const {
    register,
    formState: {errors = {}},
  }: any = useFormContext()

  const handleChange = (e: any) => {
    const value = e?.target?.value
    if (propsOnChange) propsOnChange(value)
  }

  const _register = !!name ? register(name) : {}

  return (
    <div className={'input-container ' + containerClassName}>
      <label>
        <Label label={label} />
        <div className={`input-base horizon middle ${className}`}>
          {icon && iconLocation === 'left' && (
            <span className="input-icon left">{icon}</span>
          )}

          {rows > 1 ? (
            <textarea
              onChange={handleChange}
              onKeyDown={onlyNumbers ? acceptOnlyNumbers : undefined}
              className="input per-100"
              rows={rows}
              {...props}
              {..._register}
            />
          ) : (
            <input
              onChange={handleChange}
              onKeyDown={onlyNumbers ? acceptOnlyNumbers : undefined}
              className="input per-100"
              {...props}
              {..._register}
            />
          )}

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
