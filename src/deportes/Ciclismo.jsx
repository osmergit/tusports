import {  Link } from 'react-router-dom';
import Cardciclismo from './Cardciclismo.jsx';

export const Ciclismo = () => {

    return( 
<div className="login-form">
<br></br>
    <Cardciclismo/>
   
           <h3><Link to="/vciclismo" className='btn-register'>Video 1 Tech Ciclismo</Link></h3>
           <h3><Link to="/v2ciclismo" className='btn-register'>Video 2 Tech Ciclismo</Link></h3>
           </div>
    )

}
export default Ciclismo;