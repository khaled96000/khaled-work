import React, { Component } from 'react'

export default class Increment extends Component {
  constructor(props){
     super(props)
     this.state={
      count:0
  }
  }

  increment=()=>{
     this.setState({
      count:this.state.count+1
  })
 }
  decrement=()=>{
   this.setState({
    count:this.state.count-1
})
}
   render() {
    return (
      <div className="center">
      
      <button onClick={this.increment}>increment</button>
      <button onClick={this.decrement}>decrement</button>
      <div className="container">{this.state.count}</div>
      </div>
    )
  }
}

