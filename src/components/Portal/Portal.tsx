import React, {useState, CSSProperties, useEffect, useCallback} from 'react'
import ReactDOM from 'react-dom'

interface Style {
  [key: string]: string | number
}

type OffsetOptions =
  | ''
  | 'tl'
  | 'tc'
  | 'tr'
  | 'bl'
  | 'bc'
  | 'br'
  | 'cl'
  | 'cc'
  | 'cr'

interface Props {
  children: React.ReactNode
  style?: Style
  hocRef?: any
  position?: string
  offset?: OffsetOptions
  reverseDirection?: boolean
  customWidth?: number
}

const getOffset = (offset: string, size: number): number => {
  if (offset === 't' || offset === 'l') return 0
  if (offset === 'c') return size / 2
  if (offset === 'b' || offset === 'r') return size
  return 0
}

export const Portal = ({
  reverseDirection = false,
  children,
  position = 'absolute',
  hocRef = null,
  offset = '',
  customWidth = 0,
}: Props) => {
  const {offsetHeight, offsetWidth} = (hocRef || {}).current || {}

  const container = hocRef?.current.closest('.scrollable')

  const [currentPosition, setCurrPos] = useState({
    x: hocRef?.current?.getBoundingClientRect().x || 0,
    y: hocRef?.current?.getBoundingClientRect().y || 0,
  })

  const scrollEvent = useCallback(() => {
    // console.log('scroll', {container, top: container.scrollTop})
    // setScrollTop(container.scrollTop)
    setCurrPos({
      x: hocRef.current.getBoundingClientRect().x || 0,
      y: hocRef.current.getBoundingClientRect().y || 0,
    })
  }, [hocRef])

  useEffect(() => {
    if (container) container.addEventListener('scroll', scrollEvent, false)
    return () => {
      if (container) container.removeEventListener('scroll', scrollEvent, false)
    }
  }, [container, scrollEvent])

  const top = currentPosition.y + getOffset(offset[0], offsetHeight)
  const left =
    currentPosition.x + getOffset(offset[1], offsetWidth) - customWidth

  const style = {
    position,
    top,
    left,
    width: customWidth || offsetWidth,
  } as CSSProperties

  const child = (
    <div
      className={`${reverseDirection ? 'vertical-reverse' : ''}`}
      style={style}>
      {children}
    </div>
  )

  return ReactDOM.createPortal(
    child,
    // @ts-ignore
    document.getElementById('portal')
  )
}
