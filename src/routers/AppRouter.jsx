import React from 'react'
import { BrowserRouter as Router, Route, Switch }
  from 'react-router-dom/cjs/react-router-dom.min'
import Header from '../components/Header'
import Aerolinea from '../components/Aerolinea'

const Saludo = () =>
  <h1 style={{
    textAlign: 'center',
    marginTop: '20px'
  }}>
    {'Hola bienvenido'}
  </h1>

export const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Saludo aeriolinea=''/>
        </Route>
        <Route exact path='/vivair'
          component={ () => <Aerolinea aerolinea='vivair'/>}/>
        <Route exact path='/avianca'
          component={ () => <Aerolinea aerolinea='avianca' />} />
        <Route exact path='/latam'
          component={ () => <Aerolinea aerolinea='latam' />} />
      </Switch>
    </Router>
  )
}
