import React, {MouseEventHandler} from 'react'

interface Props {
  label?: string
  onClick?: MouseEventHandler<HTMLSpanElement>
}

export const Label = ({label, onClick}: Props) => {
  return label ? <span onClick={onClick} className="input-label">{label}</span> : null
}
