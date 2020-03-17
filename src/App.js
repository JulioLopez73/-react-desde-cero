import React from 'react';
import './styles/styles.scss';
import Curso from './Curso'

const cursos = [
  {
    "titulo": "React desde cero",
    "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20Rutas%20manejo%20de%20estados%20%281%29.png",
    "price": 40,
    "profesor": "Beto Quiroga"

  },
  {
    "titulo": "Drupal desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/drupal-poster-720_3.jpg?itok=e93ErhMN",
    "price": 30,
    "profesor": "Beto Quiroga"
  },
  {
    "titulo": "Go desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2020-03/Go-desde-cero.png",
    "price": 50,
    "profesor": "Alexis Lozada"
  },
  {
    "titulo": "HTML desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t",
    "price": 10,
    "profesor": "Alvaro Felipe"
  }
]

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src="https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="banner" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Cursos de EDteamr</p>
            <p> Tu futuro te está esperando</p>
            <a href="https://ed.team" className="button">Suscribirse</a>
          </div>
        </div>
      </div>
    </div>
    <div className="ed-grid m-grid-3">
      {
        cursos.map( c => <Curso title={c.titulo} image={c.image} price= {c.price} profesor={c.profesor} /> )
      }
    </div>
</>
)

export default App;

// Reglas JSX
// 1) Toda etiqueta debe cerrarse.
// 2) Los componentes deben de devolver UN solo elemento padre.
// 3) Apoyarse de los Fragment cuando necesito devolver 2 o más elementos.
// 4) Monenclatrura Fragment o =>  <> hijos </>
// 5) img siempre se cierra.
// 6) Nombramiento de clases: class pasa a ser => className.
// 7) El atributo for, pasa a ser => htmlFor
// 8) En JSX NO se pueden utilizar las condicionales if, else, while.ººººººººººººººº