import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const LogoLink = () => (
  <Link to={"/"}>
    <img className="main-logo" src="https://ed.team/static/images/logo.svg" alt="Logo" />
  </Link>
)
export default LogoLink