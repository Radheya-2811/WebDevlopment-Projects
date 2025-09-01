import Menubar from "./Components/Menubar/Menubar";
import Explore from "./pages/Exlpore/Explore";
import ManageCategory from "./pages/ManageCategory/ManageCategory";
import ManageItems from "./pages/ManageItems/ManageItems";
import ManageUsers from "./pages/ManageUsers/ManageUsers";
import Dashboard from "./pages/Dashboard/Dashboard";
import {BrowserRouter as BroweserRouter, Route, Routes} from "react-router-dom";

const App=()=>{
  return(
    <div>
      <Menubar/>
      <Routes>
        <Route path="/dashoboard" element={<Dashboard/>}/>
        <Route path="/category" element={<ManageCategory/>}/>
        <Route path="/users" element={<ManageUsers/>}/>
        <Route path="/items" element={<ManageItems/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/" element={<Dashboard/>}/>
      </Routes>
    </div>
    
  );
}

export default App;