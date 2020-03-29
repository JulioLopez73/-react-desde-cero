import React from 'react'
import withFileUpload from '../HOC/witFileUpload'

const SquareFiles = (props) => (
  <div className="square">
    {console.log(props)}
    <form>
      <input type="file" onChange={props.addFile} />
    </form>
    {props.files.map((file, index) => (
    <div className="image" key={index}>
      <img src={file} />
    </div>

    ))}
  </div>
)

export default withFileUpload(SquareFiles)