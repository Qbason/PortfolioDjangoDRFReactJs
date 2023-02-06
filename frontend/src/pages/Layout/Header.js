import React from 'react';
import {Link } from "react-router-dom";
import logo from "./ikona_jk3_w_b.ico"
import Time from './Time';
function Header({setLanguagePage,pageContent}){

    
    const PLFlagStyle = {
        backgroundImage: "linear-gradient(white 50%, red 50%)"
    } 

    const changeLanguage = (lang)=>{
        setLanguagePage(lang)
    }
    // setActualPage("whoami")

    return(
        <header className="disapear">
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark sticky-top">
                <div className="container">

                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Logo" width="35" className="d-inline-block align-text-center"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" aria-current="page" to="/Whoami">
                                {pageContent.language==="pl"?"Kim jestem?":"Whoami?"}
                            </Link>


                            <Link className="nav-link d-none" to="/Offer" >{pageContent.language==="pl"?"Co oferuję":"What do I offer?"}</Link>


                            <Link className="nav-link" to="/CV" >CV</Link>


                            <Link className="nav-link" to="/Contact">{pageContent.language==="pl"?"Kontakt":"Contact"}</Link>


                        </div>
                        <div id="czas" className="text-light ms-auto me-3">
                            <Time />
                        </div>
                        <div className="me-lg-0 me-sm-5">
                            <button className="me-1 btn btn-light" style={PLFlagStyle} onClick={()=>changeLanguage("pl")}>PL</button>
                            <button className="btn btn-light" onClick={()=>changeLanguage("en")}>ENG</button>
                        </div>

                    </div>

                </div>
            </nav>

        </header>
    );
}
export default Header

