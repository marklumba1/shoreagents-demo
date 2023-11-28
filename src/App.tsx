import Home from "./pages/Home";
import Navbar from "./components/Navbar";
const App = () => {
    const options = [
        {title: "Home"},
        {title: "How it works", 
    subTitles: ["Hire One Agent", "Build a Team", "Create a Workforce"]}
    ]
    return ( <div>
        <Navbar options={options} brand="ShoreAgents"/>
        <Home />
        
        </div> );
}
 
export default App;