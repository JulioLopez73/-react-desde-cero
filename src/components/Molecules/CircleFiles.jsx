import React from 'react'
import withFileUpload from '../HOC/witFileUpload'

const CircleFiles = (props) => (
<div>
  <form>
    <input type="file" onChange={props.addFile} />
  </form>
  {props.files.map((file, index) => (
  <div className="image image--circle">
    <img src={file} />
  </div>
  ))}
</div>
)

export default withFileUpload(CircleFiles) 