import './App.css';
import React, { Component } from 'react'
import Counter from './components/Counter';

export default class App extends Component {
  constructor(props) {
    super(props) //take the props when I am going to initiate the state with the props giving by the parent 
    this.state={
      show: false
    }
  }

  toggle = () => {
    this.setState({show: !this.state.show})
  }
  render() {
    return (
      <div>
        <h1>WS react class component</h1>
        <button onClick={this.toggle} className="btn"> toggle </button>
        {/* {this.state.show ? <Counter /> : null} */}
        {this.state.show && <Counter />}
      </div>
    )
  }
}


