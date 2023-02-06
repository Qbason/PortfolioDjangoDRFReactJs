import Links from "./Links"
import Education from "./Education"
import Interests from "./Interests"
import MainInfo from "./MainInfo"
import ProfExper from "./ProfExper"
import Skills from "./Skills"
import TraCouCert from "./TraCouCert"
import mecv from "./me_cv.webp"
import React from "react"

function CV({getSpecificContent,languagePage}){


    const [pageContent,setPageContent] = React.useState(null)


  
    React.useEffect(
      ()=>{
        const updatePageContent = async()=>{
  
            setPageContent(
              await getSpecificContent("cv")
            )
        
          }

        updatePageContent()
      },
      [languagePage,getSpecificContent]
    )
    


    if(pageContent===null){
        return (<></>)
    }

    return(
        <div className="container">
            <div className="row pt-4" >
            <div className="rounded ">
                {/* <! - introduction -> */}
                    <div className="row">
                        <div className="col-4 p-0">
                            <img src={mecv} style={{maxHeight:"300px"}}
                                className="img-fluid rounded" alt="Jakub Kościelny"/>
                        </div>
                        <div className="col-8 p-4">
                            <MainInfo specificContent={pageContent.content}/>

                        </div>

                    </div>
                    {/* <! - professional experience -> */}
                        <div className="row mb-4">
                            <div className="col-12 text-center border-bottom fw-bold mt-4">
                                <h4> {pageContent.content.work_experience_title} </h4>
                            </div>
                        </div>
                        <div className="row ps-4 pe-4">

                            <ProfExper specificContent={pageContent.content}/>

                        </div>

                        {/* <! - education -> */}
                            <div className="row mb-4 page">
                                <div className="col-12 text-center border-bottom fw-bold mt-4">
                                    <h4> {pageContent.content.education_title} </h4>
                                </div>
                            </div>

                            <div className="row ps-4 pe-4">
                                <Education specificContent={pageContent.content}/>
                            </div>

                            {/* <! - skills -> */}
                                <div className="row mb-4 page">
                                    <div className="col-12 text-center border-bottom fw-bold mt-4">
                                        <h4> {pageContent.content.skills_title} </h4>
                                    </div>
                                </div>

                                <div className="row">

                                    <Skills specificContent={pageContent.content}/>

                                </div>


                                {/* <! - trainings, courses, certificates -> */}
                                    <div className="row mb-4 page">
                                        <div className="col-12 text-center border-bottom fw-bold mt-4">
                                            <h4> {pageContent.content.training_courses_title} </h4>
                                        </div>
                                    </div>

                                    <div className="row ps-4 pe-4">
                                        <TraCouCert specificContent={pageContent.content}/>
                                    </div>
                                    {/* <! - interests -> */}
                                        <div className="row mb-4 page">
                                            <div className="col-12 text-center border-bottom fw-bold mt-4">
                                                <h4> {pageContent.content.interests_title} </h4>
                                            </div>
                                        </div>
                                        <div className="row ps-2 pe-2">
                                            <Interests specificContent={pageContent.content}/>
                                        </div>
                                        {/* <! - links -> */}
                                            <div className="row mb-4 disapear">
                                                <div className="col-12 text-center border-bottom fw-bold mt-4">
                                                    <h4> {pageContent.content.links_title} </h4>
                                                </div>
                                            </div>
                                            <div className="row p-4 text-center">
                                                <Links specificContent={pageContent.content}/>
                                            </div>
                                            {/* <! - consent to data processing -> */}
            </div>
        </div>
    </div>
    )
}

export default CV