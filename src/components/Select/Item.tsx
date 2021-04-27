import {getFormOptions, Option} from '../../utils/helpers'
import React from 'react'

export const Item = ({
  index,
  data,
  style,
}: {
  index: number
  data: any
  style: any
}) => {
  const {
    options,
    name,
    multi,
    closeList,
    watch,
    setValue,
    isSubmitted,
    // propsOnChange,
  } = data
  const {label, value} = options[index]
  const values = watch(name)

  const isSelected = multi
    ? (values || []).includes(value)
    : (values || '') === value

  return (
    <label
      className={
        'horizon between select-list-item ' + (isSelected && ' selected ')
      }
      style={style}>
      <span>{label}</span>
      <input
        className={multi ? '' : 'hide'}
        type={multi ? 'checkbox' : 'radio'}
        value={value}
        name={name}
        checked={isSelected}
        onChange={() => {
          const newValue = multi
            ? isSelected
              ? (values || []).filter((i: string) => i !== value)
              : [...(values || []), value]
            : value

          setValue(
            name,
            !multi
              ? newValue
              : newValue.sort(
                  (a: string, b: string) =>
                    options.map((i: Option) => i.value).indexOf(a) -
                    options.map((i: Option) => i.value).indexOf(b)
                ),
            getFormOptions(isSubmitted)
          )

          // propsOnChange(
          //   !multi
          //     ? newValue
          //     : newValue.sort(
          //         (a, b) =>
          //           options.map(i => i.value).indexOf(a) -
          //           options.map(i => i.value).indexOf(b)
          //       )
          // )
          if (!multi) closeList()
        }}
      />
    </label>
  )
}
