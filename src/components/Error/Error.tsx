import React, {MouseEventHandler} from 'react'
import {ErrorDictionary} from '../../utils/helpers/Interfaces'
import {get} from '../../utils/helpers'

interface Props {
  name?: string
  errors?: ErrorDictionary
  onClick?: MouseEventHandler<HTMLSpanElement>
}

export const Error = ({name = '', errors = {}, onClick}: Props) => {
  const error = get(errors, name)

  return error ? (
    <p onClick={onClick} className="validation-error">
      {error.message}
    </p>
  ) : null
}
