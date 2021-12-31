import React, { Component } from 'react'

export default class CorporationBank extends Component {
    render() {
        return (
            <div>
              <h1>CorporationBank is located in {this.props.location}</h1>  
            </div>
        )
    }
}
