import React from 'react';
import './styles/styles.scss';
import Curso from './Curso'
import Banner from './Banner'
import Formulario from './Formulario'

const App = () => (
  <>
    <Banner />
    <Formulario name="EDteam" />
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