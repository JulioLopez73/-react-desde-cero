 import React, {useState, useEffect} from 'react'
 import axios from 'axios'

const Course = ({match}) => {

  const [state, setState] = useState({})

  useEffect(() => {
    console.log("hola")
    axios.get("http://my-json-server.typicode.com/JulioLopez73/json-db/cursos/4")
    .then(resp => setState(resp.data))
  }, [])

  
  // const cursoActual = cursos.filter(c => c.id === parseInt(match.params.id))[0]


  return (
    <div className="ed-grid m-grid-3">
      {
        state ? (
          <>
            <h1 className="m-cols-3">{state.titulo}</h1>
            <img src={state.image} alt={state.titulo} className="m-cols-1"/>
            <p className="m-cols-2">Profesor: {state.profesor}</p>
          </>
        ) :
          <h1>El curso no existe</h1>
      }
    </div>
  )
}

export default Course