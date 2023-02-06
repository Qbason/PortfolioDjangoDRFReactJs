import React from 'react'
import {VscGithub} from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { TfiMicrosoftAlt } from "react-icons/tfi";

function Links({specificContent}) {
  return (
    <>
        <div className="col-4">

            <a className="btn btn-dark p-3"
                href={specificContent.links.github}><VscGithub/></a>
            </div>

            <div className="col-4">

            <a className="btn btn-dark p-3"
                href={specificContent.links.microsoft}><TfiMicrosoftAlt/></a>
            </div>

            <div className="col-4">

            <a className="btn btn-dark p-3"
                href={specificContent.links.linkedin}><BsLinkedin/></a>
        </div>

    </>
  )
}

export default Links