import { Route, Routes } from "react-router-dom";
import Menubar from "./Components/Menubar/Menubar";
import Explore from "./pages/Explore/Explore";
import ManageCategory from "./pages/ManageCategory/ManageCategory";
import ManageItems from "./pages/ManageItems/ManageItems";
import ManageUsers from "./pages/ManageUsers/ManageUsers";
import Dashboard from "./pages/Dashboard/Dashboard";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App=()=>{
  return(
    <div>
      <Menubar/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
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