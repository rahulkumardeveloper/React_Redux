import React from 'react';
import {useSelector,useDispatch } from 'react-redux';
import {Increment,Decrement} from './actions/index';
const App=()=>{

  const mystate=useSelector((state)=> state.changeNumber);
  const dispath=useDispatch();
  return (
    <>
    <div className="templatediv">
    <h1> Increment & Decrement App</h1>
    <h4>using React And Redux</h4>
    </div>
    <div className="resultbox">
      <a  className="increment" onClick={()=>dispath(Increment())}><span>+</span> </a>
      <input className="inputbox" type="text" value={mystate}/>
      <a  className="decrement" onClick={()=>dispath(Decrement())}><span>-</span></a>
    </div>
    
    </>
  )
}

export default App;