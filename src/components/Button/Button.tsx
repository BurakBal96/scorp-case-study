import React from 'react'

interface Props {
  className?: string
  onClick?: Function
  [name: string]: any
}

export const Button = ({
  children,
  className = '',
  ...props
}: Props & React.ComponentPropsWithoutRef<'button'>) => {
  return (
    <button className={'btn ' + className} {...props}>
      {children}
    </button>
  )
}
