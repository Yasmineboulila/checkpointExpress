import './App.css';
import React, { useEffect, useState } from 'react'
import axios from "axios"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home';
import Services from "./services"
import PrivateRouter from "./privateRouter"


function App() {
  const [name,setName]=useState('')
const createpost=()=>{
  axios.post("http://localhost:5800/api/create_post%22,%7B",
    {name:name}
  ).then((res)=>{
    console.log(res)
  })
}

  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/service" element={
        <PrivateRouter>
          <Services />
          add the contact  
        </PrivateRouter>
      } />
    </Routes>
    </BrowserRouter>
     <input placeholder='name' onChange={(e)=>setName(e.target.value)} />
     <button onClick={createpost}>send</button>
    </div>
  );
}

export default App