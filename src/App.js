import React,{useState,useEffect} from 'react';
import './App.css';
import Count from './components/Lyfe-cycle/count'
function App() {
  const [showCounter, setShowCounter] = useState(true);
  function removeCounter(){
    setShowCounter(false);
  }
  useEffect(() => {
    console.log("App update")
    return () => {
    }
  }, [showCounter])
  return (
    <div className="App">
      {console.log("App render")}
      {showCounter == true ? <Count/> : null}
      <button onClick={()=>{
        removeCounter();
      }}>Remove Counter</button>
    </div>
  );
}

export default App;
