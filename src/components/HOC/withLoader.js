import React, { Component } from 'react'

// const withLoader = (propsValue, WrappedComponent) => {
const withLoader = (propsValue) => (WrappedComponent) => {
  return class WithLoader extends Component {

    constructor(props) {
      super(props)
    }

    render() {
      // console.log(this.props)
      // return this.props.courses.length === 0
      return this.props[propsValue].length === 0
      ? <h1>Cargando...</h1>
      : <WrappedComponent {...this.props} />
    }  

  }
}

export default withLoader