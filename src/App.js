import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes ,BrowserRouter as Router,Switch,Navigate} from "react-router-dom";
import Entries from './component/Entries';
import { Navbar } from './component/Navbar/Navbar';
import Addquotes from './component/Addquotes';
import Pagefive from './component/Pagefive';
import Secondadd from './component/Secondadd'
import Fourthadd from './component/Fourthadd'
import ThirdNav1 from './component/ThirdNav1'
import SixNav1 from './component/SixNav1'
import Bpmn from './component/Bpmn/Bpmn';
import Bpnmtest from './component/Bpmn/Bpnmtest';


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
                    <Route path="/ThirdPage" element={<ThirdNav1 />} />
                    <Route path="/SixPage" element={<SixNav1 />} />

                    <Route path="/bpmn" element={<Bpmn />} />


                    
                </Routes>
            </div>
        </Router>
     
    </div>
  );
}

export default App;
