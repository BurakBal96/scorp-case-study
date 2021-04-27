import {action, makeObservable, observable} from 'mobx'

export class UIStore {
  currentPage = "Home"

  constructor() {
    makeObservable(this,{
      currentPage: observable,

      setCurrentPage: action
    })
  }

  setCurrentPage(name = "Home") {
    this.currentPage = name
  }
}