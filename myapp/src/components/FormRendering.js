import React, { Component } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
export default class FormRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             uname:"",
             pword:""
        }
    }
    changeUserName=(event)=>{
        this.setState({
            uname:event.target.value
        })
    }
    changepwordName=(event)=>{
        this.setState({
            pword:event.target.value
        })
    }
    submitUserData=(event)=>{
        event.preventDefault()
        console.log(`${this.state.uname} ${this.state.pword}`)
    }
    
    render() {
        return (
            
                <div>
            <BrowserRouter>
          <Routes>
              <Route path="/help" element={<Call />}></Route>
              
             </Routes>
          </BrowserRouter>
                <form onSubmit={this.submitUserData} method='get'>
                    <input type="text" value={this.state.uname} 
                     onChange={this.changeUserName} 
                    />
                    <br></br>
                    <input type="text" value={this.state.pword}
                    onChange={this.changepwordName} 
                    />
                    <br></br>
                    <button type="submit">login</button>
                </form>
            </div>
        )
    }
}
function Call(){

return(
    <>
    <h1>Form</h1>
    </>
)
}
