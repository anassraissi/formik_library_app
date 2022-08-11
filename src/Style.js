import React, { Component } from 'react';
import './styles.css';  // use style just in this component;

class Style extends Component {
    state={
            active:true
        }
        //  this exemple for set style dynamicely and change their value  
        
    render() {
        const style={color:'white', fontWeight:'bold'}
        return (
            <div className="Style">
                <div className={this.state.active ? 'green': 'red'} style={style}> 
                    text color <br></br>
                    <button onClick={()=>{this.setState({active:!this.state.active})}}> turn to red</button>
                    <button onClick={()=>{this.setState({active:!this.state.active})}}> turn to green</button>
                </div>        
            </div>

        )
    }
}
export default Style;
