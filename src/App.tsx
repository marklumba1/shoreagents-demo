import Home from "./pages/Home";
import Navbar from "./components/Navbar";
const App = () => {
    return ( <div>
        <Navbar options={["Home", "Login"]} brand="ShoreAgents"/>
        <Home />
        
        </div> );
}
 
export default App;