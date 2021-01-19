import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Main from './components/Main'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Layout from './components/Layout'

function App() {

  return (
    <Layout>
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/' } exact component={Main} />
        <Route path={process.env.PUBLIC_URL + '/portfolio'} component={Portfolio} />
        <Route path={process.env.PUBLIC_URL + '/blog'} component={Blog} />
      </Switch>
    </Layout>
  )
}

export default App
