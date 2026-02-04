import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import WhyUs from "./Pages/WhyUs";

function App() {
  return (
    <BrowserRouter>

      <Header />

      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/why-us" element={<WhyUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
