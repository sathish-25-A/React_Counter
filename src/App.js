import "./App.css";
import React from "react";
import { useState } from "react";



function App() {
  const [set,Setvalue]=useState(0);

  const add=()=>{
    Setvalue(set+1);
    if(set>=10){
      Setvalue(set);
    }
  }
  const rest=()=>{
    Setvalue(0);
  }
  const sub=()=>{
    Setvalue(set-1);
    if (set<=0){
      Setvalue(set);
    }

  }
  return (
    <div >
      <h1 id="div1">Counter</h1>
      <div id="div2">
        <button id="but" onClick={add}>+</button>
        <button id="but1" onClick={rest}>Reset</button>
        <button id="but2" onClick={sub}>-</button>
      </div>
      <h2 id="div1">{set}</h2>
    </div>
  );
}

export default App;
