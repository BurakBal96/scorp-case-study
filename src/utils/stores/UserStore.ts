import {action, makeObservable, observable} from 'mobx'

export class UserStore {
  userName = ''
  email = ''

  constructor() {
    makeObservable(this, {
      userName: observable,
      email: observable,

      login: action,
    })
  }

  login({data}: {data: any}) {
    console.log(data)
    //do backend things
    this.email = data.email
    this.userName = data.userName
  }
}
