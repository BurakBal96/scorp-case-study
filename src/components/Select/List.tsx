import React, {useRef} from 'react'
import {useOutsideAlerter} from '../../utils/helpers'
import {Input} from '../Input/Input'
import {Item} from './Item'
// @ts-ignore
import {VariableSizeList} from 'react-window'
import {Portal} from 'components'

export const List = (props: any) => {
  const {
    wrapperRef,
    ONE_ITEM_HEIGHT,
    open,
    handleSearch,
    filteredOptions,
    multi,
    name,
    closeList,
    watch,
    setValue,
    propsOnChange,
    scrollHeight,
  } = props
  const listRef = useRef(null)
  useOutsideAlerter(listRef, closeList)

  const child = (
    <div ref={listRef} role="list" className="select-list">
      <div className="select-list-search-bar">
        <Input
          name=""
          onChange={handleSearch}
          className="per-100 no-border-radius"
          placeholder="Search item"
        />
      </div>

      <div className="select-scroll-list">
        <VariableSizeList
          itemData={{
            options: filteredOptions,
            multi,
            name,
            closeList,
            watch,
            setValue,
            propsOnChange,
          }}
          itemKey={(index: number) => filteredOptions[index].value}
          height={scrollHeight}
          itemCount={filteredOptions.length}
          itemSize={() => ONE_ITEM_HEIGHT}
          overscanCount={2} // The number of items (rows or columns) to render outside of the visible area
        >
          {Item}
        </VariableSizeList>
      </div>
      {/*{multi && filteredOptions.length > 4 && (*/}
      {/*  <div className="select-action">*/}
      {/*    <Button*/}
      {/*      onClick={selectAll}*/}
      {/*      className="basic-button sz-12"*/}
      {/*      label={isAllSelected ? 'Unselect All' : 'Select all'}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  )

  return (
    open && (
      <Portal offset="bl" hocRef={wrapperRef}>
        {child}
      </Portal>
    )
  )
}
