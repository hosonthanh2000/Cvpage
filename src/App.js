import React, { useRef } from 'react';
import './App.css';
import Cv from './components/pageCV/components/Cv'
import { exportComponentAsPNG  } from 'react-component-export-image';
function App() {
  const componentRef = useRef();
  return (
    <div
      style={{
        position:"relative"
      }}
    >
      <Cv ref={componentRef}/>
      <button className="bt" onClick={()=>exportComponentAsPNG(componentRef)}>Download</button>
    </div>
  );
}

export default App;
