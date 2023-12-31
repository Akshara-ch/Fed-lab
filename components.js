import React,{Component, components} from 'react';
class Counterclass extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    incrementHandler=()=>{
        this.setState({count:this.state.count+1});
    }
    decrementHandler=()=>{
        this.setState({count:this.state.count-1});
    }
    render(){
        return(
            <div>
                <button type='button' onClick={this.incrementHandler}>
                    Increment
                </button>
                &nbsp;&nbsp;{this.state.count}
                &nbsp;&nbsp;
                <button type='button' onClick={this.decrementHandler}>
                    Decrement
                </button>
            </div>
        )
    }

}
export default Counterclass;