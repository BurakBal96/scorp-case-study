import React, {useEffect, useCallback, useRef} from 'react'
import {Portal, Loader} from 'components'
import {MdClose} from 'react-icons/all'
import {useOutsideAlerter} from '../../utils/helpers'

interface Props {
  title: string
  loading?: boolean

  className?: string
  children: React.ReactNode
  onClose: Function
  closeOnOutside?: boolean
}

export const Modal = ({
  title,
  className = '',
  loading = false,
  children,
  onClose,
  closeOnOutside = true,
}: Props) => {
  const ref = useRef(null)

  const handleClose = useCallback(
    async (...e: any) => {
      await onClose(...e)
    },
    [onClose]
  )

  const escKeyHandler = useCallback(
    (e: any) => {
      if (e.key === 'Escape') {
        handleClose(e).then()
      }
    },
    [handleClose]
  )

  useOutsideAlerter(ref, handleClose, closeOnOutside)

  useEffect(() => {
    document.body.addEventListener('keyup', escKeyHandler)

    return () => {
      document.body.removeEventListener('keyup', escKeyHandler, false)
    }
  }, [escKeyHandler])



  return (
    <Portal>
      <div className="modal-base">
        <div className="modal-container" ref={ref}>
          <div className="modal-header">
            <span>{title}</span>
            <MdClose onClick={handleClose} />
          </div>
          <hr />

          <div className={'modal-content ' + className}>
            {loading ? <Loader /> : children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
