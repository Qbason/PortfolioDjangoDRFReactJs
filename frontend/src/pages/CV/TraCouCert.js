import React from 'react'

function TraCouCert({specificContent}) {
  return (
    <ol className="list-group">

        {specificContent.training_courses.map(
            (training_course)=>{
                return(
                    <li
                    className="list-group-item d-flex justify-content-between align-items-start mb-3 border-top" key={training_course.date+training_course.name}>
            
                    <div className="ms-2 me-auto">
                        <div className="fs-6"> {training_course.date} </div>
                        <div className="fw-bold"> {training_course.name} </div>
            
                    </div>
            
                </li>
                )
            }
        )}

    </ol>
  )
}

export default TraCouCert