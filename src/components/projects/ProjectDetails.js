import React from 'react'

function ProjectDetails(props) {
  const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Project Title - {id}</div>
          <p>Lorem Ipsum is simply dummy text of the pr inting and typesetting industry.</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by the net ninja</div>
          <div>2nd setempber, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
