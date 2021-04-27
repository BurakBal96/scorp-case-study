import React from 'react'
import {Header, Footer} from 'components'
// import 'antd/dist/antd.css'
import './assets/App.scss'

const Content = (props: any) => (
  <div id="page" className="vertical scrollable">
    {props.children}
    <Footer />
  </div>
)

export const LayoutDefault = (props: any) => (
  <React.Fragment>
    <Header />
    <Content>{props.children}</Content>
  </React.Fragment>
)
