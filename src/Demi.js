import PropTypes from 'prop-types';
import { useState } from 'react';
import {setState} from 'react';
function Demi(props){
    

//const a = useState("   talha")
 add=()=>{
        setState({name: 'khan'});

}


render()
{

    return(
        <div>
            {/* <h1>Welcome To Our Website {a}</h1> */}
             {/* <h3>NAME : {props.name}</h3> */}
            {/* <h3>AGE : {props.age}</h3>  */}
             {/* <button onClick={add}>function</button> */}
            

        </div>
    );
}
}

Demi.propTypes={
    age: PropTypes.string
}; 
export default Demi;
