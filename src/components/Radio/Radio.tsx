import React from 'react'
import {Option, FormInterface} from 'utils/helpers'

interface Props {
  options: Array<Option>
  name: string
  label?: string
  form?: FormInterface
}

export const Radio = ({options, name = '', label = '', form = {}}: Props) => {
  const {register = () => null, ...restOfForm} = form

  return (
    <div className="radio-group">
      {label && <span className="label">{label}</span>}
      {options.map(i => (
        <div className="radio-item" key={i.value}>
          <label>
            <input
              {...register(name, {...restOfForm})}
              name={name}
              type="radio"
              value={i.value}
            />
            <span className="label">{i.label}</span>
          </label>
        </div>
      ))}
    </div>
  )
}
