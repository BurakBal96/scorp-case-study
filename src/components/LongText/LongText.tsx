import React, {FC, useState} from 'react'
import {Button} from '../'

interface Props {
  className?: string
  moreText?: string
  limit?: number
  fontSize?: string
  children: string
}

export const LongText: FC<Props> = ({
  className = '',
  children = '',
  moreText = 'More',
  limit = 20,
  fontSize = '',
  ...props
}) => {
  const [all, setAll] = useState(false)

  return !all && children.length > limit ? (
    <pre className={'long-text ' + className}>
      {children.slice(0, limit)}...
      <Button
        onClick={() => setAll(true)}
        className={'basic-btn underline ' + fontSize}>
        {moreText}
      </Button>
    </pre>
  ) : (
    <pre className={'long-text ' + className}>{children}</pre>
  )
}
