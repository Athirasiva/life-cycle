import React, { Component } from 'react'

 class SecondExample extends Component {

    constructor(props) {
        super(props)
        this.state = {
            color1:"red",
            color2:"red",
        }
       
    }
    // static getDerivedStateFromProps(props, state) {
    //     return {color2:props.favcol}
    // }
    shouldComponentUpdate(){
        return true;
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({color1: "yellow"})
        }, 1000)
      }
      getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(prevState.color1);
        

      }
      componentDidUpdate () {
        
      }
      
    changecolor = ()=>{
        console.log("Inside function");
        this.setState({color1:"blue"})
        this.setState({color2:"blue"})
    }
    render() {
        return (
            <div>
             <h1>My Favorite Color is {this.state.color1}</h1>
             {/* <h2>My Favorite Color is {this.state.color2}</h2> */}
             <button type='button' onClick={this.changecolor}>Change color</button>

            </div>
        )
    }
}

export default SecondExample
