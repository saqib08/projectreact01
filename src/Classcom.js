// class component
import react from "react";

class Classcom extends react.Component{
    state = 
    {
        name:'saqib'
    }
    
    add=()=>
    {
        // this.setState({name: 'khan'});
        console.log("hello saqib");
        
    }

    render()
    {
        return(
        <div>
            <h1>Class Component</h1>
            <h3>State :{this.state.name}</h3>
            <button onClick={this.add}>Class fun</button>
        </div>
        );   
        }
    }
    export default Classcom;