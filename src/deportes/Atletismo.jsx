import {  Link } from 'react-router-dom';
import Cardatletismo from './Cardatletismo.jsx';

export const Atletismo = () => {

    return( 
<div className="login-form">
<br></br>
    <Cardatletismo/>
   
           <h3><Link to="/vatletismo" className='btn-register'>Video 1 Tech Atletismo</Link></h3>
           <h3><Link to="/v2gimnasia" className='btn-register'>Video 2 Tech Atletismo</Link></h3>
           </div>
    )

}
export default Atletismo;