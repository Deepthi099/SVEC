import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
export default function ListRendering() {
    // let emplist=["keerthi","charitha","deepthi","hema"]

    let emplist=[
        {
            name:"keerthi",
            salary:50000,
            mail:"keerthi@gmail.com"
        },
        {
            name:"deepthi",
            salary:50000,
            mail:"deepthi@gmail.com"
        },
        {
            name:"priya",
            salary:50000,
            mail:"priya@gmail.com"
        }
    ]

    return (
        <div>
            <BrowserRouter>
          <Routes>
              <Route path="/h" element={<M />}></Route>
              
             </Routes>
          </BrowserRouter> 
            <h1> List rendering</h1>
         {
            // emplist.map(element=> (
            // <h1>{element}</h1>
            // ))
         }
       {  emplist.map(
             empdata=>
             <>
             <p>{empdata.name}</p>                
             <p>{empdata.salary}</p>                
             <p>{empdata.mail}</p>
             </>                
             
        
         )
             }
        </div>
    )
}
function M(){

    return(
        <>
        <h1>Home </h1>
        </>
    )
}