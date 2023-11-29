import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
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
      <Navbar options={options} brand="SHOREAGENTS" />
      <Home />
    </div>
  );
};

export default App;
