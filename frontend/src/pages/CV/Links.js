import React from 'react'

function Links({specificContent}) {
  return (
    <>
        <div className="col-4">

            <a className="btn btn-dark"
                href={specificContent.links.github}>GitHub<i
                    className="bi bi-github"></i></a>
            </div>

            <div className="col-4">

            <a className="btn btn-dark"
                href={specificContent.links.microsoft}>Microsoft<i
                    className="bi bi-microsoft"></i></a>
            </div>

            <div className="col-4">

            <a className="btn btn-dark"
                href={specificContent.links.linkedin}>Linkedin<i
                    className="bi bi-linkedin"></i></a>
        </div>

    </>
  )
}

export default Links