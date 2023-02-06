import Whoami from "../Whoami/Whoami"


function Home({getSpecificContent,languagePage}){



    return(
        <Whoami getSpecificContent={getSpecificContent} languagePage={languagePage}/>
    )
}

export default Home