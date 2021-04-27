import React from 'react'

interface Props {
  className?: string
}

export const Loader = ({className = ''}: Props) => {
  return <span className={'loader ' + className} />
}
