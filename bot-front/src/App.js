import React, { useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import { useTelegram } from "./hooks/useTelegram.ts";
import Button from "./components/Button";


function App() {

  const {tg, onToggleButton} = useTelegram()

  useEffect(()=>{
    tg.ready();
  },[])

  return (
    <div className="App">
      <Header/>
      <Button onClick={onToggleButton}>toggle</Button>
    </div>
  );
}

export default App;
