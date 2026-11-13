

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./Pages/signup"
import Login from "./Pages/Login"
import Landing from "./Pages/landing"
import { useState } from "react"
import "./index.css"

function App(){
   const [value,setvalue]=useState([
        {
            username:"Sowndarya",password:"123"
        },
      {
            username:"Vasanth",password:"123"
        }
    ])
   return(
      <div>
         <BrowserRouter>
   
   <Routes>
    <Route path='/' element={<Login value={value} setvalue={setvalue}/>} />
     <Route path='/Signup' element={<Signup value={value} setvalue={setvalue}/>} />
     <Route path='/landing' element={<Landing />} />
   </Routes>
   </BrowserRouter>
      </div>
   )
}

export default App;
