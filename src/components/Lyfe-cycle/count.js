import React, { Component } from 'react'

export class count extends Component {
    componentWillMount(){
        console.log("WillMount called here");
    }
    componentDidMount(){
        console.log("Finished Mounting");
    }
    componentDidUpdate(){
        console.log("Everything up to date");
        console.log(this.state.count);
    }
    componentWillUnmount(){
        console.log("WillUnmount Called");
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextState.count===this.state.count){
            return false;
        }
        else return true;
    }
    constructor(props){
        console.log("Counter constructor");
        super(props)
        this.state = {
            count : 0,
        }
    }
    increase(){
        this.setState({
            count : this.state.count + 1,
        })
        // console.log(this.state.count);
        // 0
    }
    decrease(){
        this.setState({
            count : this.state.count - 1,
        })
        // console.log(this.state.count);
        // 0
    }
    render() {
        console.log("Counter Render");
        return (
            <div>
                <button onClick={()=>{
                    this.increase();
                }}>increase</button>
                <span>{this.state.count}</span>
                <button onClick={()=>{
                    this.decrease();
                }}>decrease</button>
            </div>
        )
    }

}

export default count
