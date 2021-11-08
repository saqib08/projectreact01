import {useState} from 'react'; 

 function State() {
    const [data,setData]=useState("saqib")
   function updateData()
    {
        setData("ibrahim")
    }
    return (
        <div>
            <h1>{data}</h1>
            <button onClick={updateData}>UpdateData</button>
        </div>
    )
}

export default State;
