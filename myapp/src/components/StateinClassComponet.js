import React, { Component } from 'react'
import '../States.css'

export default class StateinClassComponet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"deepthi",
             count:0
        }
    }
    
    render() {
        setTimeout(()=>{
         this.setState({
             name:"keerthi",
             
         })
        },2000)
        return (
            <div className="demo">
                <h1>Hello {this.state.name}</h1>
                <div className='main'>
                <h1>count:{this.state.count}</h1>
                </div>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    }

                    )
                }}>Increment button</button>
                <br/>
                <br/>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count-1
                    }

                    )
                }}>decrement count</button>
                <br/>
                <br/>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count=0
                    }

                    )
                }}>reset count</button>
                
            </div>
        )
    }
}
