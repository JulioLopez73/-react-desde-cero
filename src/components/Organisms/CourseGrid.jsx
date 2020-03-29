import React from 'react'
import CourseCard from '../Molecules/CourseCard'
import withLoader from '../HOC/withLoader'

const CourseGrid = ({courses}) => (
  <div className="ed-grid m-grid-4">
      { courses.map( c => 
        <CourseCard  
        key={c.key}
        id={c.id}
        title={c.titulo}
        image={c.image}
        price={c.price}
        profesor={c.professor}
        /> 
        )}
    </div>
)

// export default withLoader("courses", CourseGrid) 
export default withLoader("courses") (CourseGrid)
