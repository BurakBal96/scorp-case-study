import {createContext, useContext} from 'react'
import {UIStore} from './UIStore'
import {UserStore} from './UserStore'

export const stores = createContext({
  UIStore: new UIStore(),
  UserStore: new UserStore(),
})

export const useStores = () => useContext(stores)
