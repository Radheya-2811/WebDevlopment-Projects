import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    if (location.pathname === "/") {
      // Scroll if already on Home
      const section = document.getElementById("contact");
      section?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate if on another page
      navigate("/contact");
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 flex items-center justify-between px-5 py-2 backdrop-blur-md bg-black/40 border-b border-white/10">
      <img
        src="/img/Logo.png"
        alt="Prostafff Logo"
        className="h-12 w-auto py-0 px-0 object-contain"
       />


      <nav className="flex items-center  gap-6 ">
        <Link to="/" className="text-white hover:text-blue-400 transition">
          Home
        </Link>
        <Link to="/about" className="text-white hover:text-blue-400 transition">
          About
        </Link>
        <Link to="/why-us" className="text-white hover:text-blue-400 transition">
          Why Us
        </Link>

        <button
          onClick={handleContactClick}
          className="bg-blue-600 px-4 py-1.5 rounded-lg text-white hover:bg-blue-700 transition"
        >
          Contact Us
        </button>
      </nav>
    </header>
  );
};

export default Header;
