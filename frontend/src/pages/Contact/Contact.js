import email from "./email.webp"
import calling from "./calling.webp"
import React from "react"

const Contact = ({getSpecificContent,languagePage })=>{


    const [pageContent,setPageContent] = React.useState(null)


  
    React.useEffect(
      ()=>{
        const updatePageContent = async()=>{
  
            setPageContent(
              await getSpecificContent("contact")
            )
        
          }

        updatePageContent()
      },
      [languagePage,getSpecificContent]
    )

    // console.log(pageContent)

    if(pageContent===null){
        return (<></>)
    }

    return(
        <div className="container">
            <div className="row pt-4 g-4">
            <div className="col-sm-6">
                <div className="card h-100">
                    <img src={calling} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title ">

                            {pageContent.content.phone_number_title}

                        </h5>
                        <p className="card-text ">

                            {pageContent.content.phone_number_info}

                        </p>
                        <a href="tel:+48500471619" className="btn btn-primary">

                            {pageContent.content.phone_number}

                        </a>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card h-100">
                    <img src={email} className="card-img-top" alt="zdjęcie komputera z mailem"/>
                    <div className="card-body">
                        <h5 className="card-title ">

                            {pageContent.content.email_title}

                        </h5>
                        <p className="card-text ">

                            {pageContent.content.email_info}

                        </p>
                        <a href="mailto:kuba1095@gmail.com" className="btn btn-primary">
                
                            {pageContent.content.email}

                        </a>
                    </div>
                </div>
            </div>


        </div>
    </div>
    )
}

export default Contact