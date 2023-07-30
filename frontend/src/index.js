import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Layout from './pages/Layout/Layout'
import Home from './pages/Home/Home'
import CV from './pages/CV/CV'
import Whoami from './pages/Whoami/Whoami'
import Contact from './pages/Contact/Contact'
import Offer from './pages/Offer/Offer'
import NoPage from './pages/NoPage'


// import reportWebVitals from './reportWebVitals';



export default function App() {

  const [languagePage,setLanguagePage] = React.useState("pl")



  const pagesContent = React.useRef(
    [

    ]
  )

  const getContent = React.useCallback(async (page)=>{


    const url = `/api/contentwebpage/?`+new URLSearchParams(
        {
          "language":languagePage,
          "name":page
        }
    )
    
    const response = await fetch(
      url,
      {
        method:'GET',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        }
      }
    )

    if (!response.ok){
      throw new Error(
        "Bad response! from "+url
      )
    }
    const content = await response.json()

    pagesContent.current=[...content,...pagesContent.current]

    return [...content].shift()


  },[languagePage])

  const findSpecificContent = React.useCallback(async (page)=>{

    for(var i =0;i<pagesContent.current.length;i++){
      
      if(pagesContent.current[i].language === languagePage && pagesContent.current[i].name === page)
          return pagesContent.current[i]

    }
    return await getContent(page)

  },[languagePage,getContent])
 
  // console.log("Render APP")

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout setLanguagePage={setLanguagePage} languagePage={languagePage} getSpecificContent={findSpecificContent}/>}>
          <Route index element={<Home getSpecificContent={findSpecificContent} languagePage={languagePage} />} />
          <Route path="Whoami" element={<Whoami getSpecificContent={findSpecificContent} languagePage={languagePage} />} />
          <Route path="CV" element={<CV getSpecificContent={findSpecificContent} languagePage={languagePage}/>} />
          <Route path="Contact" element={<Contact getSpecificContent={findSpecificContent} languagePage={languagePage} />} />
          <Route path="Offer" element={<Offer  />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
