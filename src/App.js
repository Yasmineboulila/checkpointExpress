import './App.css';
import React, { useEffect, useState } from 'react'
import axios from "axios"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home';
import Services from "./services"
import PrivateRouter from "./privateRouter"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
      <Route path="/services" element={
        <PrivateRouter>
          <Services />
          add the contact  
        </PrivateRouter>
      } />
      <Route path="/contact" element={
                 <Form>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Label>Email address</Form.Label>
                   <Form.Control type="email" placeholder="Enter email" />
                 </Form.Group>
           
                 <Form.Group className="mb-3" controlId="formBasicPassword">
                   <Form.Label>Password</Form.Label>
                   <Form.Control type="password" placeholder="Password" />
                 </Form.Group>
               
                 <Button variant="primary" type="submit">
                   Submit
                 </Button>
               </Form>
      }/>
    </Routes>
    </BrowserRouter>
     <input placeholder='name' onChange={(e)=>setName(e.target.value)} />
     <button onClick={createpost}>send</button>
    </div>
  );
}

export default App