import React, {useState, useEffect, useMemo, useRef, useCallback} from 'react'

import {FormInterface, get, Option, getFormOptions} from 'utils/helpers'
import {MdArrowDropDown, MdArrowDropUp, MdClose} from 'react-icons/all'
import {Label, Error} from 'components'
import {useFormContext} from 'react-hook-form'
import {List} from './List'

const ICON_STYLE = {fontSize: 15, marginRight: 10}
const ONE_ITEM_HEIGHT = 40

const OPEN_ICON = <MdArrowDropUp style={ICON_STYLE} />
const CLOSE_ICON = <MdArrowDropDown style={ICON_STYLE} />

interface Props {
  className?: string
  name?: string
  label?: string
  placeholder?: string
  options?: Array<Option>
  onChange?: Function
  disableSearch?: boolean
  disableClear?: boolean
  multi?: boolean
  iconLocation?: string
  listHeight?: number
  form?: FormInterface
}

export const Select = ({
  className = '',
  name = 'select',
  label = '',
  placeholder = 'Select...',
  options: propOptions = Array.from(Array(1000)).map((u, i) => ({
    label: 'option ' + i,
    value: String(i),
  })),
  onChange: propsOnChange = () => null,
  multi = false,
  iconLocation = 'right',
  listHeight = 185,
  disableSearch = propOptions.length < 5,
  disableClear = false,
  ...props
}: Props) => {
  const wrapperRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([] as Array<Option>)

  const handleOptions = useCallback(() => {
    const _options = propOptions.map(i => ({
      label: String(i.label),
      labelLowerCase: String(i.label).toLowerCase(),
      value: String(i.value ?? ''),
    }))

    setOptions(_options)
    setFilteredOptions(_options)
    return _options
  }, [propOptions])

  useEffect(() => {
    handleOptions()
  }, [propOptions, handleOptions])

  const scrollHeight = useMemo(() => {
    const scrollMaxLen = (options || []).length * ONE_ITEM_HEIGHT
    return Math.min(listHeight || 185, scrollMaxLen)
  }, [options, listHeight])

  const {
    register,
    formState: {errors = {}, isSubmitted},
    setValue,
    watch = () => {},
  } = useFormContext()

  // const watchValues = watch()
  const selectedValue = multi
    ? get(watch(), name) || []
    : get(watch(), name) || ''

  const selectedItem = multi
    ? false
    : options.find(i => i.value === selectedValue)

  const [filteredOptions, setFilteredOptions] = useState(options)

  const closeList = () => {
    handleOptions()
    setTimeout(() => setOpen(false), 100)
    return true
  }

  const handleClear = async (e: any) => {
    e.stopPropagation()

    setValue(name, multi ? [] : '', getFormOptions(isSubmitted))
    propsOnChange(multi ? [] : '')

    // if (submitOnChange) onSubmit()
  }

  useEffect(() => {
    if (name) register(name)
  }, [name, register])

  const toggleList = () => {
    const newState = !open
    setOpen(newState)
    if (newState) handleOptions()
  }

  const handleSearch = async (value: string) => {
    setFilteredOptions(
      value
        ? options.filter(i =>
            (i.labelLowerCase || '').includes(value.toLowerCase())
          )
        : options
    )
  }

  return (
    <div {...props} className={`select-wrapper ${className}`}>
      <Label onClick={toggleList} label={label} />
      <div
        onClick={toggleList}
        ref={wrapperRef}
        className={`select-header ${open && ' opened '} ${
          (selectedItem || {}).label && ' selected '
        }`}>
        <div className="select-label horizon">
          {iconLocation === 'left' && (open ? OPEN_ICON : CLOSE_ICON)}
          <span className="placeholder">
            {multi
              ? selectedValue.length
                ? selectedValue.length + ' Item Selected'
                : placeholder
              : (selectedItem || {}).label || placeholder}
          </span>
        </div>
        <div className="horizon">
          {!disableClear && (multi ? selectedValue.length : selectedValue) ? (
            <MdClose style={ICON_STYLE} onClick={handleClear} />
          ) : null}
          {iconLocation === 'right' && (open ? OPEN_ICON : CLOSE_ICON)}
        </div>
      </div>

      <List
        {...{
          wrapperRef,
          ONE_ITEM_HEIGHT,
          open,
          handleSearch,
          filteredOptions,
          multi,
          name,
          closeList,
          watch,
          propsOnChange,
          scrollHeight,
          isSubmitted,
          setValue,
          disableSearch,
        }}
      />

      <Error onClick={toggleList} name={name} errors={errors} />
    </div>
  )
}
