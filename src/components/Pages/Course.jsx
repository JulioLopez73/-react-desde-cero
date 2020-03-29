 import React, {useState} from 'react'

const Course = ({match}) => {

  const [state, setState] = useState({
        id:1,
        titulo: "React desde cero",
        image: "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20Rutas%20manejo%20de%20estados%20%281%29.png",
        price: 40,
        profesor: "Beto Quiroga"
  })

  // const cursoActual = cursos.filter(c => c.id === parseInt(match.params.id))[0]

const changeTitle = (text) => {
  setState({
    ...state,
    titulo: text
  })
}

  return (
    <div className="ed-grid m-grid-3">
      {
        state ? (
          <>
            <h1 className="m-cols-3">{state.titulo}</h1>
            <img src={state.image} alt={state.titulo} className="m-cols-1"/>
            <p className="m-cols-2">Profesor: {state.profesor}</p>
            <button onClick={changeTitle.bind(this, "Go desde cero")}>Cambiar título</button>
          </>
        ) :
          <h1>El curso no existe</h1>
      }
    </div>
  )
}

export default Course