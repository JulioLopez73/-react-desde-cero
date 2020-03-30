import React from 'react'
import useCounter from '../CustomHooks/useCounter'


const Counter = () => {

  const counterOne = useCounter()

  return (
    <div className="data">
      {counterOne.count}
      <br/>
      <button onClick={counterOne.increase}>Agregar</button>
      <button onClick={counterOne.decrease}>Disminuir</button>
    </div>
  )

}

export default Counter