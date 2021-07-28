import React, { Component } from 'react'

export default class Counter extends Component {
    //1-init the state
    constructor(props){
        console.log("constructor()")
        super(props)
        this.state={
            count: 0,
        }
    }
    // state = {
    //     count: 0
    // } //init the state in the constructor

        //2- update the state
        increment = () => {
            this.setState({count: this.state.count+1})
        }

        decrement = () => {
            this.setState({count: this.state.count > 0 ? this.state.count-1 : this.state.count})
        }

        //life cycle of the class component: 
        //phase1:Mounting(constructor(), render(), componentDidMount()), 
        //phase2: Updating(render(), componentDidUpdate()), 
        //phase3:Unmounting(componentWillUnmount())
        
        componentDidUpdate() {
            console.log("component did update")
        }
        componentWillUnmount() {
            console.log("component will unmount")
        }
        componentDidMount() {
            console.log("component did mount")
        }

    render() {
        console.log('render()')
        return (
            <div>
                <button onClick={this.decrement}>-</button>
                {" "}
                <span >{this.state.count}</span>
                {" "}
                <button onClick={this.increment} >+</button>
            </div>
        )
    }
}
