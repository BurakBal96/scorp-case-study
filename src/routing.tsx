import React, {FC} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {LayoutDefault} from 'layouts'

import {Landing, NoMatch} from 'pages'

interface Props {
  component: FC
  layout?: FC
  path: string
}

const GuestRoute = ({
  component: Component,
  layout: Layout = LayoutDefault,
  ...rest
}: Props) => (
  <Route
    {...rest}
    element={
      <Layout>
        <Component />
      </Layout>
    }
  />
)

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <GuestRoute component={Landing} path="/" />

        <GuestRoute path="*" component={NoMatch} />
      </Routes>
    </BrowserRouter>
  )
}
