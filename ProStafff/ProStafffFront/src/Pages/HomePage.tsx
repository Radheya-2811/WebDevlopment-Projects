import Header from "../Header/Header";
import Companies from "../LandingPage/Companies";
import LandPage from "../LandingPage/LandPage";

const HomePage=()=>{
    return(
        <div className="min-h-[100vh] bg-mine-shaft-900 font-['poppins']">
            <Header/>
            <LandPage/>
            <Companies/>
        </div>
    )
}

export default HomePage;