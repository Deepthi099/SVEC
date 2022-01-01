import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import FormRendering from './FormRendering';

export default function Home() {
    return (
        <div>
          <BrowserRouter>
          <Routes>
              <Route path="/home" element={<Main />}></Route>
              <Route path="/h" element={<M />}></Route>
          </Routes>
          </BrowserRouter>  
        </div>
    )
}

function Main(){

    return(
        <>
        <h1>Home page</h1>
        </>
    )
}

function M(){

    return(
        <>
        <h1>Home</h1>
        </>
    )
}