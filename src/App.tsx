import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
const App = () => {
  const options = [
    { menu: "Home" },
    {
      menu: "How it works",
      subMenus: ["Hire One Agent", "Build a Team", "Create a Workforce"],
    },
    {
      menu: "Services",
      subMenus: [
        "Real Estate Virtual Assistants",
        "Property Management Virtual Assistants",
        "Real Estate Virtual Bookkeepers",
      ],
    },
    {
      menu: "About Us",
      subMenus: ["Our Team", "Our Company", "Our Agents"],
    },
    {
      menu: "Pricing",
    },
    {
      menu: "Blog",
    },
    {
      menu: "Podcast",
    },
    {
      menu: "Reviews",
    },
    {
      menu: "Contact",
    },
  ];

  return (
    <div>
      <BrowserRouter>
        <Navbar options={options} brand="SHOREAGENTS" />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/home" replace={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
