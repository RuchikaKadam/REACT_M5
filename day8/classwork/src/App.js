import './App.css';
import React, {useState} from 'react';

function App() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <div className="App">
      <div>
        <h5>first</h5>
        {show1 ? (
          <p>something is written over here which can be displayed when we use show button</p>
        ): ''}
        <button onClick={() =>
           {setShow1(true)
           setShow2(false)}}>Show</button>
        
      </div>
      <div>
        <h5>second</h5>
        {show2 ? (
          <p>This is second show button content</p>
        ) : '' }
        <button onClick={()=> {setShow2(true)
        setShow1(false)}}>Show more</button>
        
      </div>
    </div>
  );
}

export default App;
