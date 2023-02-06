import React from 'react'

function ProfExper({specificContent}) {

    const experience = specificContent.work_experience.map(
        (element)=>{

            return(
                <li className="list-group-item d-flex justify-content-between align-items-start mb-3 border-top" key={element.title+element.period+element.where}>
        
                <div className="ms-2 me-auto">
                    <div className="fs-6">{element.period}</div>
                    <div className="fw-bold">{element.title}</div>
                    {element.where}
                </div>
        
            </li>
            )
        }
    )


  return (
    <ol className="list-group">

        {experience}

    </ol>
  )
}

export default ProfExper