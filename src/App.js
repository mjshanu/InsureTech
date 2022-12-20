import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import Entries from './component/Entries';

function App() {
  const [components, setComponents] = useState(["Sample Component"]); 

  function addComponent() {
    setComponents([...components, "kishan"]) 
    
  } 
  return (
    <div className="App">
     <Entries/> 
     <div> 

    
  </div> 
    </div>
  );
}

export default App;
