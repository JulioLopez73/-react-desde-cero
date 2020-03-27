import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const NavigationMenu = () => (
  <nav className="main-menu" id="main-menu">
    <ul>
      <li><NavLink exact to="/" activeClassName="activo"> Inicio </NavLink></li>
      <li><NavLink to="/cursos" activeClassName="activo"> Cursos </NavLink></li>
      <li><NavLink to="/usuarios" activeClassName="activo"> Usuarios </NavLink></li>
      <li><NavLink to="/formulario" activeClassName="activo"> Contacto </NavLink></li>
    </ul>
  </nav>
)

export default NavigationMenu