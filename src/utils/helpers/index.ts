import {useRef, useEffect} from 'react'
export {qs} from './QueryString'
export type {FormInterface, Option, Error} from './Interfaces'

export const sleep = async (delay = 2000) =>
  await new Promise(r => setTimeout(r, delay))

export const getFormOptions = (isSubmitted: boolean) => {
  return {
    shouldValidate: isSubmitted,
    shouldDirty: isSubmitted,
  }
}

export const get = (
  object = {} as any,
  keys = '' as string | Array<string>,
  defaultVal = '' as any
): any => {
  keys = Array.isArray(keys) ? keys : keys.split('.')
  object = object[keys[0]]
  if (object && keys.length > 1) {
    return get(object, keys.slice(1))
  }
  return object === undefined ? defaultVal : object
}

export const kFormatter = (num = 0 as number) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * Number((Math.abs(num) / 1000).toFixed(1)) + 'k'
    : String(Math.sign(num) * Math.abs(num))
}

interface IntervalCallback {
  current: Function
}

export const useInterval = (callback: Function, delay: number) => {
  const savedCallback = useRef() as IntervalCallback

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }

    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

interface Reference {
  current: any
}

export const useOutsideAlerter = (
  ref: Reference,
  action: Function = () => null,
  active = true
) => {
  useEffect(() => {
    if (!active) return

    function handleClickOutside(event: {target: any}) {
      if (ref.current && !ref.current.contains(event.target)) {
        action()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, action, active])
}
