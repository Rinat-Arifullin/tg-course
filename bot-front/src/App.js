import React, { useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import { useTelegram } from "./hooks/useTelegram.ts";
import { Route, Routes} from 'react-router-dom'
import { ProductList } from "./components/ProductList/index.tsx";
import {Form} from './components/Form/index.tsx';


function App() {

  const {tg} = useTelegram()

  useEffect(()=>{
    tg.ready();
  },[])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<ProductList/>}/>
        <Route path="form" element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
