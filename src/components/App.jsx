import React from 'react';
import AppRoutes from './AppRoutes'
import '../styles/styles.scss';
import { Provider } from 'react-redux'
import store from '../redux/store'
import { getCourseList } from '../redux/actionCreators';

store.dispatch(getCourseList())

const App = () => (
  <Provider store={store}>
  <AppRoutes />
  </Provider>
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