import React from 'react'
import {useStores} from 'utils/stores'
import {MdHome} from 'react-icons/all'
import {Navigation} from './Navigation'
import {observer} from 'mobx-react'

export const Header = observer(() => {
  const {UIStore} = useStores()

  return (
    <header>
      <div>
        <MdHome />
        {UIStore.currentPage}
      </div>
      <Navigation />
    </header>
  )
})
