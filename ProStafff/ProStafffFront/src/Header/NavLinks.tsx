import { use } from "react";
import { Link, useLocation } from "react-router-dom";

const NavLinks=()=>{
    const links=[
        {name:"Home", url:"/"},
        {name:"For Brands", url:"/for-brands"},
        {name:"For Candidates", url:"/for-candidates"},
        {name:"About Us", url:"/about-us"},
    ]
    const location=useLocation();
    return <div className="flex gap-5 text-mine-shaft-50 h-full items-center">
        {
            links.map((link,index)=><div className={` ${location.pathname==link.url?"border-bright-sun-400 text-bright-sun-400":"border-transparent"} border-t-[3px] h-full flex items-center`}>
                <Link key={index} to={link.url}>{link.name}</Link>
            </div>)
        }
    </div>    
}

export default NavLinks;