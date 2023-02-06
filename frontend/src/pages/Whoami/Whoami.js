import React from 'react';
import mewhoami from './me_whoami.webp'

function Whoami({getSpecificContent,languagePage}) {

    const [pageContent,setPageContent] = React.useState(null)


    React.useEffect(
      ()=>{
        const updatePageContent = async()=>{
  
            setPageContent(
              await getSpecificContent("whoami")
            )
        
          }

        updatePageContent()
      },
      [languagePage,getSpecificContent]
    )


    if(pageContent==null){
        return (<></>)
    }
    // console.log(
    //     "Render whoami"
    // )


    const getStudiedAbout = ()=>{

        const programmingLanguages = pageContent.content.programming_languages.map(
            (progLang)=>{
                return(
                <li key={progLang}>
                    {progLang}
                </li>)
            } 
        )

        const studiedAbout = pageContent.content.studied_about.map(
            (studied,index,arr)=>{
                return(
                    <li key={studied}>
                        {studied}
                        {(arr.length-1)===index?<ul>{programmingLanguages}</ul>:""}
                    </li>
                )
            }
        )
        
        return studiedAbout


    }







    return (
        <div className="container">
            <div className="row pt-4" id="whoami">
    
                <div className="card mb-3 border p-0">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={mewhoami} className="img-fluid rounded-start"
                                alt="zdjęcie Jakub Kościelnego"/>
                        </div>
                        <div className="col-md-8 p-3 ">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {pageContent.content.title}

                                </h5>
                                <div className="card-text" style={{textAlign:"justify"}}>
                                {pageContent.content.first_info}
                                <ul>
                                    {getStudiedAbout()}
                                </ul>

                                {pageContent.content.end_info}
                                </div>
                                <p className="card-text">
                                    <small className="text-muted">
                                        {pageContent.content.date_of_adding}
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Whoami;