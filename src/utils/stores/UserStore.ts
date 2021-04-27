// @ts-ignore
import cookie from 'react-cookies'
import {action, makeObservable, observable} from 'mobx'

export class UserStore {
  public userName = ''
  public email = ''
  public token = cookie.load('token') || ''

  constructor() {
    makeObservable(this, {
      userName: observable,
      email: observable,
      token: observable,

      login: action,
    })
  }

  public login = ({data}: {data: any}) => {
    console.log(data)
    //do backend things
    cookie.save('token', '-INSERT_USER_TOKEN-', {path: '/'})
    this.token = '-INSERT_USER_TOKEN-'
    //end of backend thingies
    this.email = data.email
    this.userName = data.userName
  }

  public logout = () => {
    cookie.save('token', '', {path: '/'})
    cookie.remove('token', {path: '/'})

    this.token = ''
    this.email = ''
    this.userName = ''
  }
}
