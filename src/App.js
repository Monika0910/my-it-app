import TopBar from "./components/TopBar/TopBar";
import NavBar from "./components/NavBar/NavBar";
import Routes from './components/routes';
import Footer from "./components/Footer/Footer"
import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <NavBar/>
        <Routes />
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
