import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes ,BrowserRouter as Router,Switch,Navigate} from "react-router-dom";
import Entries from './component/Entries';
import { Navbar } from './component/Navbar/Navbar';
import Addquotes from './component/Addquotes';


function App() {
  
  return (
    <div className="App">
       <Router>
            <div>
               
                <Routes>
                    <Route exact path="/" element={< Entries/>}></Route>
                    <Route path="/Addquotes" element={<Addquotes />} />
                    
                </Routes>
            </div>
        </Router>
     
    </div>
  );
}

export default App;
