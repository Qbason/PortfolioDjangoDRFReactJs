import React from 'react'

function Skills({specificContent}) {


  return (
    <>
    {/* <! - programmatically -> */}
    <div className="col-md-3 col-sm-6">

        {specificContent.skills.programming.map(
            (skill)=>(<p className="border rounded m-2 p-2" key={skill}> {skill}</p>)
        )
        }

    </div>
    {/* <! - operationally -> */}
    <div className="col-md-3 col-sm-6">
        {specificContent.skills.systems.map(
            (skill)=>(<p className="border rounded m-2 p-2" key={skill}> {skill}</p>)
        )}
    </div>
    {/* <! - network -> */}
    <div className="col-md-3 col-sm-6">
        {specificContent.skills.network.map(
            (skill)=>(<p className="border rounded m-2 p-2" key={skill}> {skill}</p>)
        )}
    </div>
    {/* <! - other -> */}
    <div className="col-md-3 col-sm-6">
        {specificContent.skills.others.map(
            (skill)=>(<p className="border rounded m-2 p-2" key={skill}> {skill}</p>)
        )}
    </div>
    </>
  )
}

export default Skills