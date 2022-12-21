import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes ,BrowserRouter as Router,Switch,Navigate} from "react-router-dom";
import Entries from './component/Entries';
import { Navbar } from './component/Navbar/Navbar';
import Addquotes from './component/Addquotes';
import Pagefive from './component/Pagefive';
import Secondadd from './component/Secondadd'
import Fourthadd from './component/Fourthadd'


function App() {
  
  return (
    <div className="App">
       <Router>
            <div>
               
                <Routes>
                    <Route exact path="/" element={< Entries/>}></Route>
                    <Route path="/Addquotes" element={<Addquotes />} />
                    <Route path="/pagefive" element={<Pagefive />} />
                    <Route path="/Secondadd" element={<Secondadd />} />
                    <Route path="/Fourthadd" element={<Fourthadd />} />
                    
                </Routes>
            </div>
        </Router>
     
    </div>
  );
}

export default App;
