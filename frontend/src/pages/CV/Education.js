import React from 'react'

function Education({specificContent}) {


    if(specificContent===null)
        return <></>

    const education = specificContent.education.map(
        (element)=>{

            return (
                <li className="list-group-item d-flex justify-content-between align-items-start mb-3 border-top" key={element.where+element.period}>
        
                <div className="ms-2 me-auto">
                    <div className="fs-6">{element.period}</div>
                    <div className="fw-bold">{element.where}</div>
                    {
                        element.major&&
                        <p className="m-0"> {element.major_title}:{element.major}</p>
                    }
                    {element.specialization&&
                    <p className="m-0">
                        {element.specialization_title}: {element.specialization}
                    </p>
                    }
                    <p className="m-0"> {element.education_level_title}:{element.education_level} </p>
                </div>
        
            </li>
            )
        }
    )


  return (
    <ol className="list-group">
        {education}
    </ol>
  )
}

export default Education