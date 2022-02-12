import React from 'react'
import data from '../data/data'
import { NavLink } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
  const { aerolineas } = data
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink exact to='/want-to-travel/' activeClassName='active'>
              Home
            </NavLink>
          </li>
          {
            aerolineas.map(aerolinea =>
              <li key={aerolinea.id}>
                <NavLink exact to={`/want-to-travel/${aerolinea.name}`}
                  activeClassName='active'>
                  {aerolinea.name}
                </NavLink>
              </li>)
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header
