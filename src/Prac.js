import react from "react";
import PropTypes from 'prop-types';
// import { useState } from "react";
function Prac(props) {

    // const a = useState("   talha")


    return (
        <div>
            {/* <h1>hello saqib{a}</h1> */}
            <h2>Name : {props.name}</h2>
            <button className="btn btn-primary">haha</button>

        </div>
    );
}
export default Prac;
Prac.propTypes = {
    name: PropTypes.string.isRequired
}
// Prac.defaultProps={
// name: 'ya default hai'
// }