
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';



function Signup()
{


    return(
             <div className="col-md-4 offset-md-4">
       
        
        
              <h1  align="center">Signup</h1>        

  <h3> Name:           <input type="text" className="form-control" /><br/></h3>   
  <h3> Email:          <input type="email" className="form-control" /><br/></h3>   
  <h3> Password:       <input type="password" className="form-control" /><br/></h3>   
  <h3> Con_Password:   <input type="password" className="form-control" /><br/></h3>
  <button className="btn btn-lg btn-success form-control">Signup</button>
  


    </div>
   

    )
}
export default Signup;