import React from 'react'
import withLogin from '../HOC/withLogin'
const Private = (props) => (
  <div>
    {console.log(props)}
<h1>{props.loggued ? "Página Privada" : "No hay Login"}</h1>
  </div>
)


export default withLogin(Private)