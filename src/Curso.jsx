import React from 'react'
import Course from './Course'
import { Link } from 'react-router-dom'

const Curso = ({id, title, image, price, profesor}) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <Link to={`/cursos/${id}`}>
        <img src={image} alt={title} />
      </Link>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center"> {title} </h3>
      <div className="s-main-center">
        {profesor}
      </div>
      <div className="s-main-center">
    <a className="button--ghost-alert button--tiny" href="https://ed.team">{ `$ ${price} UDS` }</a>
      </div>
    </div>
  </article>
)



Curso.defaultProps = {
  title: 'No se encontró ningún título',
  image: "https://c.pxhere.com/photos/27/9a/architecture_buildings_city_cityscape_downtown_hd_wallpaper_reflection_river-1170115.jpg!d",
  price: "--",
  Profesor: ""
}

export default Curso