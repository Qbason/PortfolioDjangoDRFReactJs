import React from 'react'

function MainInfo({specificContent}) {


  return (
    <>
    <h5 className="card-title text-center"> - CV - </h5>
    <div>
        <h2> Jakub Kościelny </h2>
        <h5>
            E-mail: <b> kuba1095@gmail.com </b>
        </h5>
        <h5>
            {specificContent.telephone_text} <b> +48 500 471 619 </b>
        </h5>
        <h5>
            {specificContent.date_of_birth}<b> 23/02/1999 </b>
        </h5>
        <h5>
            {specificContent.town}:<b> Kaczyce </b>
        </h5>
    </div>
    </>
  )
}

export default MainInfo