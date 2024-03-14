import './App.css';
import React,{useEffect, useState} from 'react';
import ProgressBar from './ProgressBar';

function App() {
  const [progress, setProgress] = useState(0)
  useEffect(()=>{
    setInterval(() => {
      setProgress((val)=> val+1)
    }, 100)
  })
  return (
    <React.Fragment>
    <div className="App">
      <ProgressBar value={progress}/>
    </div>
    </React.Fragment>
  );
}

export default App;
