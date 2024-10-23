import React, { Component } from 'react'

 class Child extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }
 componentWillUnmount = () => {
    alert("The componenet named Header is about to be unmounted")
 }
 
    render() {
        return (
            <div>
                <h1>Hello world</h1>
            </div>
        )
    }
}

export default Child
