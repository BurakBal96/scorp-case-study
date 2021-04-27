import React from 'react'
import {useStores} from 'utils/stores'
import {MdHome} from 'react-icons/all'
import {Navigation} from './Navigation'
import {observer} from 'mobx-react'
import {Button} from 'components'
import {useNavigate} from 'react-router-dom'

export const Header = observer(() => {

  const {UIStore} = useStores()
  const navigate = useNavigate()
  const handleHome = () => navigate('/')

  return (
    <header>
      <div>
        <Button onClick={handleHome} className="basic-btn">
          <MdHome />
          {UIStore.currentPage}
        </Button>
      </div>
      <Navigation />
    </header>
  )
})
