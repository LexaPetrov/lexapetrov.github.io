import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import Main from './components/Main'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Layout from './components/Layout'

function App() {

  return (
    <Layout>
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/'} exact component={Main} />
        <Route path={process.env.PUBLIC_URL + '/portfolio'} exact component={Portfolio} />
        <Route path={process.env.PUBLIC_URL + '/blog'} exact component={Blog} />
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
