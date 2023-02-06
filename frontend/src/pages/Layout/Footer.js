import React, { memo } from 'react';

const Footer = ({pageContent}) => {

    return (
        <footer className="container-fluid disapear">

        <div className="row row-cols-6 py-5 mt-5 border-top border-bottom">
            <div className="col-4 text-center">
                <p className="text-muted ">
                {pageContent&&pageContent.content.who_made_page}
                </p>
                <p>©Copyright 2023</p>
            </div>

            <div className="col-4 text-center">
                <h5 className="">
                {pageContent&&pageContent.content.additional_information}
                </h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="https://github.com/Qbason" className="nav-link p-0 text-muted">GitHub
                            <i className="bi bi-github"></i></a></li>
                    <li className="nav-item mb-2"><a href="https://docs.microsoft.com/en-gb/users/jakubkocielny/"
                            className="nav-link p-0 text-muted">Microsoft <i className="bi bi-microsoft"></i></a></li>
                </ul>
            </div>

            <div className="col-4 text-center">
                <h5 className="">
                {pageContent&&pageContent.content.localization}
                </h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">Jakub Kościelny</li>
                    <li className="nav-item mb-2">43-417 Kaczyce</li>
                </ul>
            </div>

        </div>
    </footer>
    )
};

export default Footer;
