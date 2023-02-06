import React from 'react'

function Interests({specificContent}) {
  return (
    <>
        {
        specificContent.interests.map(
            (interest)=>{
                return(
                <div className="col-sm-6 col-md-3" key={interest}>
                    <div className="border rounded p-2 m-1"> {interest} </div>
                </div>
                )
            }
        )
        }
    </>
  )
}

export default Interests