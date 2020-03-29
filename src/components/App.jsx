import React from 'react';
import '../styles/styles.scss';
import CourseCard from './Molecules/CourseCard'
import Form from './Pages/Form'
import Courses from './Pages/Courses'
import Course from './Pages/Course'
import MainMenu from './Organisms/MainMenu'
import History from './Pages/History'
import Home from './Pages/Home'
import Users from './Pages/Users'
import Public from './Pages/Public'
import Private from './Pages/Private'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => (
  <Router>
    <MainMenu />
    <Switch>
    <Route path="/" exact component={ Home } />
    <Route path="/cursos/:id" component={ Course } />
    <Route path="/cursos" component={ Courses } />
    <Route path="/historial/:valor" component={ History } />
    <Route path="/historial" component={ History } />
    <Route path="/usuarios" component={ Users } />
    <Route path="/publica" component={ Public } />
    <Route path="/privada" component={ Private } />
    <Route path="/formulario" component={ () => <Form name="Página de contacto" /> } />
    <Route component={ () => (
      <div className="ed-grid">
        <h1>Error 404</h1>
        <span>Página no encontrada</span>
      </div>
    ) } />
    </Switch>
  </Router>
)

export default App;

// ******************** Reglas JSX ********************************

// 1) Toda etiqueta debe cerrarse.
// 2) Los componentes deben de devolver UN solo elemento padre.
// 3) Apoyarse de los Fragment cuando necesito devolver 2 o más elementos.
// 4) Monenclatrura Fragment o =>  <> hijos </>
// 5) img siempre se cierra.
// 6) Nombramiento de clases: class pasa a ser => className.
// 7) El atributo for, pasa a ser => htmlFor
// 8) En JSX NO se pueden utilizar las condicionales if, else, while.


// ********************* src/Components *******************************

// src/Components
//    -Atoms
//    -Molecules
//    -Organisms
//    -Templates
//    -Pages