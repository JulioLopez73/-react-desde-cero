import { ADD_TO_CART, DELETE_FROM_CART, GET_COURSE_LIST } from './actions'
import axios from 'axios'


const addToCart = id => ({
  type: ADD_TO_CART,
  id
})

const deleteFromCart = id => ({
  type: DELETE_FROM_CART,
  id
})

const getCourseList = () => dispatch => {
  axios.get('https://my-json-server.typicode.com/JulioLopez73/json-db/db')
  .then(response => {
    return dispatch({
      type: GET_COURSE_LIST,
      courses: response.data
    })
  })
}

export { addToCart, deleteFromCart, getCourseList }