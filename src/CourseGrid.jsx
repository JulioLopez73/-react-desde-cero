import React from 'react'
import Curso from './Curso'

const cursos = [
  {
    "id": 1,
    "titulo": "React desde cero",
    "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20Rutas%20manejo%20de%20estados%20%281%29.png",
    "price": 40,
    "profesor": "Beto Quiroga"

  },
  {
    "id": 2,
    "titulo": "Drupal desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/drupal-poster-720_3.jpg?itok=e93ErhMN",
    "price": 30,
    "profesor": "Beto Quiroga"
  },
  {
    "id": 3,
    "titulo": "Go desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2020-03/Go-desde-cero.png",
    "price": 50,
    "profesor": "Alexis Lozada"
  },
  {
    "id": 4,
    "titulo": "HTML desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t",
    "price": 10,
    "profesor": "Alvaro Felipe"
  }
]

const CourseGrid = () => (
  <div className="ed-grid m-grid-4">
    {cursos.map( c => <Curso  key={c.key} id={c.id} title={c.titulo} image={c.image} price={c.price} profesor={c.profesor} /> )}
  </div>
)

export default CourseGrid