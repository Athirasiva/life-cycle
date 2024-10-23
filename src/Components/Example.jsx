import React, { Component } from 'react'

class Example extends Component {

    constructor(props) {
        super(props)
        this.state = {
             favoritecolor1:"red",
             favoritecolor2:"red",
             favoritecolor:"red"
        }
    }
    static  getDerivedStateFromProps(props, state) {
        return { favoritecolor1:props.favcol}
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({favoritecolor:"Blue"})
        },1000)
    }
    render() {
        return (
            <div>
               <h1>My Favorite Color is {this.state.favoritecolor}</h1> 
               <h2>My Favorite Color is {this.state.favoritecolor1}</h2>
               <h3>My Favorite Color is {this.state.favoritecolor2}</h3>
            </div>
        )
    }
}

export default Example
