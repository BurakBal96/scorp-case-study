import React from 'react'

interface Props {
  className?: string
  onClick?: Function
  [name: string]: any
}

export const Button = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithRef<'button'>>(
  (
    {
      children,
      className = '',
      ...props
    }:Props & React.ComponentPropsWithRef<'button'>,
    ref
  ) => {
    return (
      <button ref={ref} className={'btn ' + className} {...props}>
        {children}
      </button>
    )
  }
)
