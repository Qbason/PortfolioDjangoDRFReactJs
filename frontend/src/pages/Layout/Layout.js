import { Outlet } from "react-router-dom";
import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({getSpecificContent,setLanguagePage,languagePage}) => {

  const [pageContent,setPageContent] = React.useState(null)



  React.useEffect(
    ()=>{
      const updatePageContent = (async()=>{

        setPageContent(
          await getSpecificContent("whoami")
        )
    
      })
      updatePageContent()
    },
    [languagePage,getSpecificContent]
  )

  if(pageContent===null)
    return <></>

  // console.log("Render layout")
  return (
    <>
    <Header pageContent={pageContent} setLanguagePage={setLanguagePage} />
    <Outlet/>
    <Footer pageContent={pageContent}/>
  </>
  );
};

export default React.memo(Layout);